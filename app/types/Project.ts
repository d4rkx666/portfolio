export interface Project{
   id: string
   project_number: number
   company_name: string
   professional_title: string
   work_type: string
   duration: Duration
   sumary: string
   full_description: string
   technologies: string[]
   url_project: string
   images: string[]
}

interface Duration {
   start: string
   end: string
}