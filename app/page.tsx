"use client";
import { useMemo, useRef, useState } from 'react';
import { portfolio_repository } from './repository/Portfolio';
import Loader from '@/components/Loader';
import { ProjectCard } from '@/components/index/ProjectCard';
import ProjectModal from '@/components/index/ProjectModal';
import { Project } from './types/Project';

export default function Home() {

  // States
  const [ecosystem, setEcosystem] = useState("java");
  const {data:projects, loading: isLoadingProjects} = portfolio_repository();
  const projectsDivRef = useRef<HTMLDivElement | null>(null);

  // Project modal states
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sorted by project number DESC
  const projects_sorted = useMemo(()=>{
    if(!isLoadingProjects && projects.length > 0){
      return projects.sort((a, b) => b.project_number - a.project_number);
    }else{
      return projects;
    }
  },[isLoadingProjects])

  // Open project modal with selected project
  const openProject = (project:Project)=>{
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  }

  // Scroll to other divs
  const scrollTo = (where:string) =>{
    switch(where){
      case "projects":
        projectsDivRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      default:
        break;
    }
  }

  if(isLoadingProjects){
    return <Loader fullPage message="booting portfolio" minDuration={200} />;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-32">
        <div className="inline-block mb-6 px-4 py-1.5 border-l-2 border-[#00FF88] bg-[#00FF88]/5 font-mono text-sm text-gray-300">
          <span className="text-[#00FF88]">$</span> load_user_profile --include projects
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          <span className="text-white">Bridging</span>
          <br />
          <span className="text-[#00FF88]">system architecture</span>
          <br />
          <span className="md:text-4xl text-white">& </span>
          <span className="text-white">user experience</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-10">
          Full-stack engineer focused on building robust and elegant systems where logic meets design.
        </p>
        <div className="flex gap-4">
          <button onClick={() => scrollTo("projects")} className="px-8 py-3 bg-[#00FF88]/10 border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/20 transition-all duration-300 tracking-wide text-sm">
            VIEW PROJECTS
          </button>
          <button className="px-8 py-3 border border-gray-700 hover:border-[#00FF88]/50 hover:text-[#00FF88] transition-all duration-300 tracking-wide text-sm">
            <a href={"/contact"}>CONTACT</a>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-15">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 border border-[#00FF88]/30 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-[#00FF88]"></div>
              </div>
              <h2 className="text-3xl font-light tracking-wide text-white">My background?</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Full-stack engineer specializing in the <span className="text-[#00FF88]">Java</span> and 
                <span className="text-[#00FF88]"> Node.js</span> ecosystems, building robust, scalable and maintainable applications
                with precision and elegance.
              </p>
              <p>
                My work bridges enterprise-grade Java architectures with 
                high-performance Node.js runtimes — think <span className="text-[#4C1D95]">Spring Boot</span> meeting 
                <span className="text-[#4C1D95]"> React JS</span>.
              </p>
              <p>{/* #db9e2b */}
                It's a must to mention that I care deeply about the <span className="text-[#db9e2b]">User Experience</span> in both sides.
              </p>
              
              {/* Docker Code snippet */}
              <div className="mt-6 bg-[#0A0A0F] border border-gray-800 p-4 font-mono text-xs relative group">
                <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-[#00FF88]/30 to-transparent" />
                <div className="text-gray-500 mb-2">// docker-compose.yml</div>
                <div className="space-y-1">
                  <div><span className="text-[#00FF88]">version</span>: <span className="text-white">'3.8'</span></div>
                  <div><span className="text-white">services</span>:</div>
                  <div className="ml-4">
                    <div><span className="text-[#4C1D95]">java-api</span>:</div>
                    <div className="ml-4">
                      <div><span className="text-gray-500">build</span>: <span className="text-white">./java/spring-boot</span></div>
                      <div><span className="text-gray-500">ports</span>: <span className="text-white">- "8080:8080"</span></div>
                      <div><span className="text-gray-500">environment</span>:</div>
                      <div className="ml-4 text-gray-400">- JVM_OPTS="-Xmx512m"</div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div><span className="text-[#4C1D95]">node-runtime</span>:</div>
                    <div className="ml-4">
                      <div><span className="text-gray-500">build</span>: <span className="text-white">./node/express</span></div>
                      <div><span className="text-gray-500">ports</span>: <span className="text-white">- "3000:3000"</span></div>
                      <div><span className="text-gray-500">depends_on</span>:</div>
                      <div className="ml-4 text-gray-400">- java-api</div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-gray-600 text-[10px] flex items-center gap-2">
                  <span>[$] docker compose up</span>
                  <span className="text-[#00FF88]">▸ both runtimes active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="bg-[#111115] border border-gray-800 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-sm text-[#00FF88]">select_ecosystem --mode</div>
                {/* Stack toggle */}
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono transition-colors duration-300 ${ecosystem === 'java' ? 'text-[#00FF88]' : 'text-gray-600'}`}>JAVA</span>
                    <button
                      onClick={() => setEcosystem(ecosystem === 'java' ? 'node' : 'java')}
                      className="relative w-12 h-6 bg-gray-800 rounded-full transition-all duration-300 hover:border-[#00FF88]/50 border border-transparent focus:outline-none"
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
                          ecosystem === 'java' ? 'left-0.5 bg-[#00FF88]' : 'left-[1.625rem] bg-[#4C1D95]'
                        }`}
                      />
                    </button>
                    <span className={`text-xs font-mono transition-colors duration-300 ${ecosystem === 'node' ? 'text-[#00FF88]' : 'text-gray-600'}`}>NODE</span>
                  </div>
                </div>
              </div>

              {/* Stack and information */}
              <div className="transition-all duration-500 min-h-[280px]">
                {ecosystem === 'java' ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="border-b border-gray-800 pb-3">
                      <div className="text-[#00FF88] font-mono text-xs mb-2">$ java --version</div>
                      <div className="text-gray-300 font-mono text-sm">OpenJDK 21 LTS</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">Spring Boot</span>
                        <span className="text-gray-600 text-xs ml-auto">microservices</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">Hibernate/JPA</span>
                        <span className="text-gray-600 text-xs ml-auto">ORM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">Maven/Gradle</span>
                        <span className="text-gray-600 text-xs ml-auto">build</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">JUnit + Mockito</span>
                        <span className="text-gray-600 text-xs ml-auto">testing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">MQTT</span>
                        <span className="text-gray-600 text-xs ml-auto">message queues</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">SQL / NoSQL</span>
                        <span className="text-gray-600 text-xs ml-auto">databases</span>
                      </div>
                    </div>

                    {/* Java code snippet */}
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="font-mono text-[10px] text-gray-600">@Service public class Orchestrator &#123;</div>
                      <div className="font-mono text-[10px] text-gray-500 ml-4">private final NodeBridge bridge;</div>
                      <div className="font-mono text-[10px] text-[#00FF88] ml-4">public Response execute(Request req) &#123;</div>
                      <div className="font-mono text-[10px] text-gray-600 ml-8">return bridge.handle(req);</div>
                      <div className="font-mono text-[10px] text-[#00FF88] ml-4">&#125;</div>
                      <div className="font-mono text-[10px] text-gray-600">&#125;</div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="border-b border-gray-800 pb-3">
                      <div className="text-[#00FF88] font-mono text-xs mb-2">$ node --version</div>
                      <div className="text-gray-300 font-mono text-sm">v22.14.0 LTS</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">React JS</span>
                        <span className="text-gray-600 text-xs ml-auto">javascript / typescript</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">Next JS</span>
                        <span className="text-gray-600 text-xs ml-auto">framework</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">Axios</span>
                        <span className="text-gray-600 text-xs ml-auto">REST</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">Redux</span>
                        <span className="text-gray-600 text-xs ml-auto">storage</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00FF88] text-xs">◆</span>
                        <span className="text-gray-300">Tailwind CSS</span>
                        <span className="text-gray-600 text-xs ml-auto">ui design</span>
                      </div>
                    </div>

                    {/* Node js code snippet */}
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="font-mono text-[10px] text-gray-600">class Orchestrator &#123;</div>
                      <div className="font-mono text-[10px] text-gray-500 ml-4">constructor(private bridge: NodeBridge) &#123;&#125;</div>
                      <div className="font-mono text-[10px] text-[#00FF88] ml-4">async execute(req: Request): Promise&lt;Response&gt; &#123;</div>
                      <div className="font-mono text-[10px] text-gray-600 ml-8">return this.bridge.handle(req);</div>
                      <div className="font-mono text-[10px] text-[#00FF88] ml-4">&#125;</div>
                      <div className="font-mono text-[10px] text-gray-600">&#125;</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status indicator */}
              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${ecosystem === 'java' ? 'bg-[#00FF88] animate-pulse' : 'bg-[#4C1D95]'}`} />
                <span className="text-gray-500 text-xs font-mono">
                  {ecosystem === 'java' ? 'JAVA_VM :: active' : 'NODE_RUNTIME :: active'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-32" ref={projectsDivRef}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-[#00FF88]"></div>
          <h2 className="text-3xl font-light tracking-wide text-white">Selected works</h2>
          <div className="flex-1 w-px h-px bg-gradient-to-r from-[#00FF88]/20 to-transparent"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects_sorted.map((project, idx) => (
            <ProjectCard key={idx} project={project} onClickEvent={() => openProject(project)}/>
          ))}
        </div>
      </section>

      {/* Project Modal*/}
      <ProjectModal 
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}