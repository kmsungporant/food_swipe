import Image from "next/image"

export default function JeffTesting() {
    return (
    <>
        <div>
            {
                ['bruh'].map( path=>   {
                    return(
                        <div key = {path}>
                            <Image src="/bruh.jpg" alt = 'g' width ='280' height = '400' />

                        </div>

                    )
                })
            }

        </div>
    </>
    )
}