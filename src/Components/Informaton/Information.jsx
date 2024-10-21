import { GrAttachment } from 'react-icons/gr';
import { VscSend } from "react-icons/vsc";

function Information() {
    return (
        <section className="max-w-5xl  mx-auto bg-white p-8 drop-shadow-lg rounded-lg my-12">
            <header>
                <h1 className="font-bold text-5xl mb-6">Drop Us a <span className="text-green-400">Line</span></h1>
            </header>
            <main>
                <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name*</label>
                        <input className="mt-4 block w-full   px-3 py-2 border border-gray-300 rounded-md shadow-md" type="text" placeholder="Enter Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email*</label>
                        <input className="mt-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md" type="email" placeholder="Enter Your Email" />
                    </div>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number <span className="text-neutral-400">(Optional)  </span>
                        </label>
                        <input className="mt-4 w-full px-3 py-2 border border-gray-300 rounded-md shadow-md" type="text" placeholder="Enter Your Phone Number" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name <span className="text-neutral-400">(Optional)</span></label>
                        <input className="mt-4 w-full border border-gray-300 rounded-md shadow-md px-3 py-2" type="text" placeholder="Enter Your Company Name" />
                    </div>
                </div>

                <div>
                    <div className="mt-8">
                        <label className="block text-sm font-medium">Services You Need <span className="text-neutral-400">(You can choose multiple)</span></label>
                        <div>
                            {['Mobile Development', 'Web Development', 'SQA Solution', 'Web UX/UI Design', 'API Integration', 'Mobile UX/UI Design', 'Software Development', 'Custom Service'].map((service) => (
                                <button key={service}
                                    className="border rounded-md shadow-md px-3 py-2 mt-4 mr-4 hover:bg-green-400 ">
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mt-8">
                        <label className="block text-sm font-medium" >Your Budget <span className="text-neutral-400">(Optional)</span></label>
                    </div>
                    <div>
                        {['Less than > $5,00', '$5,00 - $1,000', '$1,001 - $1,500', '$1,500 - $2,000'].map((amount) => (
                            <button key={amount}
                                className="border rounded-md shadow-md px-3 py-2 mt-4 mr-4 hover:bg-green-400">{amount}</button>
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <div>
                        <label className="block text-sm font-medium">Deep Details About Your Query <span className="text-neutral-400">(Optional)</span></label>
                        <textarea className="border rounded-md shadow-md w-full mt-4 px-3 py-2" name="" id="" placeholder="Tell us more about your query"></textarea>
                    </div>
                </div>
                {/* add attachment file */}
                <div className="mt-8  ">
                    <label className="block text-sm font-medium">Add Attachment <span className="text-neutral-400">(Optional)</span></label>

                    {/* <div className="mt-4 flex items-center space-x-2 border rounded-lg p-2 ">
                        <input type="text" className="border rounded-md mt-4 w-full shadow-md px-3 py-2 w-full text-gray-400 bg-transparent outline-none"
                            placeholder="(a brief, idea, branding guideline, old design,...)"
                        /> */}
                    <div className="flex items-center space-x-2 border rounded-lg p-2 mt-4">
                        <input
                            type="text"
                            placeholder="(a brief, idea, branding guideline, old design,...)"
                            className="w-full text-gray-400 bg-transparent outline-none"
                        />
                        <div>
                            <input
                                type="file"
                                //   ref={fileInputRef}
                                style={{ display: "none" }}
                            //   onChange={handleFileChange}
                            // accept="application/pdf, image/*"
                            />

                            <button className="flex items-center justify-center border rounded-md shadow-md min-w-44 bg-emerald-400  px-4 py-2 rounded-lg text-sm">
                                <GrAttachment className='mr-1 ' />
                                Add File (5Mb)
                            </button>
                        </div>

                    </div>


                </div>
                {/* submit button */}
                <div className="mt-8">
                    <button className="flex justify-center items-center border rounded-md shadow-md px-3 py-2 bg-blue-800 text-white text-sm font-medium">Send Query
                        <VscSend className='ml-1'/>
                    </button>
                </div>




            </main>
        </section>
    )
}

export default Information

