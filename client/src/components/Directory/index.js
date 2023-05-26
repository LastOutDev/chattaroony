// import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData';
function Directory() {

    return ( 
        <>

            <section className="bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 pt-28 dark:bg-gray-900">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Browse Our Collection</h1>       
                    <div className="mt-8 lg:-mx-12 lg:flex xl:mt-16">
                    <div className="lg:mx-12">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>
            
                        <div className="mt-4 space-y-4 lg:mt-8">
                        <a href="#" className="block text-base font-semibold leading-7 text-indigo-600">Web design</a>
                        <a href="#" className="block text-base font-semibold leading-7 text-gray-600">App design</a>
                        <a href="#" className="block text-base font-semibold leading-7 text-gray-600">Branding</a>
                        <a href="#" className="block text-base font-semibold leading-7 text-gray-600">Animation</a>
                        </div>
                    </div>
            
                    <div className="mt-8 flex-1 lg:mx-12 lg:mt-0">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                            {/* Display Data */}
                            <DisplayData />
                        
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>

     );
}

export default Directory;