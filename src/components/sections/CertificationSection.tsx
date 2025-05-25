import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CertificationSection(){
    return (
        <section className="py-16 bg-white">

            <h1 className=" text-center text-black text-5xl font-serif uppercase">Licenses & certifications</h1>

            <section className="bg-gray-100 shadow-lg shadow-black/50 mt-2 max-w-3xl mx-auto rounded-md pb-4">
                

                <div className="Flex mx-6">

                    <div className="flex gap-6 text-black p-2 pt-4">
                        <Link 
                            href={'https://www.linkedin.com/company/accenture/'}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="h-12" />
                        </Link>
                        <div className="text-xs">
                            <Link 
                                href={'https://www.linkedin.com/company/accenture/'}
                            >
                                <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">Salesforce Certified Platform Developer I</h2>
                            </Link>
                            <h2>Issued Nov 2023</h2>
                            <h2 className="text-gray-500">Credential ID 3780516</h2>                     
                        </div>
                    </div>  

                    <div className="flex gap-6 text-black p-2 pt-4">
                        <Link 
                            href={'https://www.linkedin.com/company/accenture/'}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="h-12" />
                        </Link>
                        <div className="text-xs">
                            <Link 
                                href={'https://www.linkedin.com/company/accenture/'}
                            >
                                <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">Salesforce Certified Platform Developer II Certification</h2>
                            </Link>
                            <h2>Issued May 2025</h2>                     
                        </div>
                    </div> 

                    <div className="flex gap-6 text-black p-2 pt-4">
                        <Link 
                            href={'https://www.linkedin.com/company/accenture/'}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="h-12" />
                        </Link>
                        <div className="text-xs">
                            <Link 
                                href={'https://www.linkedin.com/company/accenture/'}
                            >
                                <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">Salesforce Certified JavaScript Developer I Certification</h2>
                            </Link>
                            <h2>Issued 2024</h2>                    
                        </div>
                    </div> 

                    <div className="flex gap-6 text-black p-2 pt-4">
                        <Link 
                            href={'https://www.linkedin.com/company/accenture/'}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="h-12" />
                        </Link>
                        <div className="text-xs">
                            <Link 
                                href={'https://www.linkedin.com/company/accenture/'}
                            >
                                <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">Salesforce Certified Data Cloud Certification</h2>
                            </Link>
                            <h2>Issued 2024</h2>                    
                        </div>
                    </div> 

                    <div className="flex gap-6 text-black p-2 pt-4">
                        <Link 
                            href={'https://www.linkedin.com/company/accenture/'}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="h-12" />
                        </Link>
                        <div className="text-xs">
                            <Link 
                                href={'https://www.linkedin.com/company/accenture/'}
                            >
                                <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">Salesforce Certified Platform App Builder Certification</h2>
                            </Link>
                            <h2>Issued 2023</h2>                   
                        </div>
                    </div> 

                    <div className="flex gap-6 text-black p-2 pt-4">
                        <Link 
                            href={'https://www.linkedin.com/company/accenture/'}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="h-12" />
                        </Link>
                        <div className="text-xs">
                            <Link 
                                href={'https://www.linkedin.com/company/accenture/'}
                            >
                                <h2 className="text-sm font-semibold hover:underline hover:text-blue-600">Salesforce Certified AI Associate Certification</h2>
                            </Link>
                            <h2>Issued 2024</h2>                    
                        </div>
                    </div> 
                </div>
            </section>
        </section>
    );
}