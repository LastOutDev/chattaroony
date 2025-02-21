import DisplayData from "../DisplayData";
import TabsRender from "./TabsRender";
import { useState } from "react";

export const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
     <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 pt-28 dark:bg-gray-900">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Browse Our Courses</h1>       
            <div className="mt-8 lg:-mx-12 lg:flex xl:mt-16">
            <div className="lg:mx-12">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>
    
                <div className="mt-4 space-y-4 lg:mt-8">
                    <ul className="block mb-0 list-none flex-wrap pt-3 pb-4 flex-column" role="tablist">
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-left py-2">
                        <a
                            className={
                            "block rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold hover:bg-blue-500 hover:text-white " +
                            (openTab === 1
                                ? "text-white bg-blue-600 shadow-sm"
                                : "text-black-600 bg-white")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            Web Design
                        </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-left py-2">
                        <a
                            className={
                            "block rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold hover:bg-blue-500 hover:text-white " +
                            (openTab === 2
                                ? "text-white bg-blue-600 shadow-sm"
                                : "text-black-600 bg-white")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            App Design
                        </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-left py-2">
                        <a
                            className={
                            "block rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold hover:bg-blue-500 hover:text-white " +
                            (openTab === 3
                                ? "text-white bg-blue-600 shadow-sm"
                                : "text-black-600 bg-white")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            Marketing
                        </a>
                        </li>
                        {/* <Link to="/products/" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Web design</Link>
                        <Link to="/products/" className="block text-gray-600">App design</Link>
                        <Link to="/products/" className="block text-gray-600">Branding</Link>
                        <Link to="/products/" className="block text-gray-600">Animation</Link> */}
                    </ul>
                </div>
            </div>
    
            <div className="mt-8 flex-1 lg:mx-12 lg:mt-0">

                    {/* Display Data */}
                    {/* <DisplayData /> */}

                            <div className={openTab === 1 ? "" : "hidden"} id="link1">
                                {/* <h1 class="text-xl font-semibold text-gray-800 dark:text-white block">Web Design</h1> */}
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"><DisplayData /></div>
                                
                            </div>
                            <div className={openTab === 2 ? "" : "hidden"} id="link2">
                                {/* <h1 class="text-xl font-semibold text-gray-800 dark:text-white block">App Design</h1> */}
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"><DisplayData /></div>
                            </div>
                            <div className={openTab === 3 ? "" : "hidden"} id="link3">
                                {/* <h1 class="text-xl font-semibold text-gray-800 dark:text-white block">Marketing</h1> */}
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"><DisplayData /></div>
                            </div>
  
            </div>
            </div>
        </div>
    </section>
      {/* <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Web Design
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 App Design
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Marketing
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" : "hidden"} id="link1">
                    <DisplayData /> 1
                </div>
                <div className={openTab === 2 ? "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" : "hidden"} id="link2">
                    <DisplayData /> 2
                </div>
                <div className={openTab === 3 ? "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" : "hidden"} id="link3">
                    <DisplayData /> 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};