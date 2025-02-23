import Image from "next/image";
import LoaderImage from "../../public/icons/loader.gif";
import { useEffect } from "react";

export const Loader = () => {
    useEffect(() => {
        const loader = document.getElementsByClassName("loader")[0];

        setTimeout(() => {

          loader.setAttribute('id', 'hide');
        }, 2000);}, [])

    return (
        <div className="loader">
            <Image src={LoaderImage} alt="loader" />
        </div>
    )

}