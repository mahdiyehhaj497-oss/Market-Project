import { Button } from "../components/ui/button";

export default function BaseModal({ children,closeHandler}) {
    return (
        <>
            <div className="fixed left-0 top-0 w-full h-full bg-black-100/40" onClick={closeHandler}>
                <div onClick={(e)=> e.stopPropagation()} className="w-120 h-120 top-1/2 left-1/2 bg-white absolute -translate-1/2 rounded-lg ">
                    
                    {children }
                </div>
            </div>
        </>
    )
}