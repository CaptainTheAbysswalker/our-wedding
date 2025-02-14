import Image from "next/image";
import LoaderImage from "../../public/icons/loader.gif";

export const Loader = () => {
    return (
        <div className="loader">
            <Image src={LoaderImage} alt="loader" />
        </div>
    )

}