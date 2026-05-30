
import { Project } from '@/app/types/Project';
import { authenticated } from '@/core/authentication/auth'; 
import { firestoreService } from '@/core/dbconfig/firestore_service';
import { CoreRequest } from '@/core/types/RequesType';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
   const request = await req.json() as CoreRequest;
   const body = request.body as Project;

   if (!authenticated(request.user, request.password)) {
      return NextResponse.json({ success: false, message: "User not authenticated" });
   }

   try {

      await firestoreService.setDocument("projects", body.id, body);
      return NextResponse.json({ success: true });

   } catch (error) {
      return NextResponse.json(
         { error: String(error) },
         { status: 500 }
      );
   }
}