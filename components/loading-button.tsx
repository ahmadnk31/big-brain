import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export function LoadingButton({isLoading,children,loadingText}:{isLoading:boolean,children:React.ReactNode,loadingText:string}) {
    return(
        <Button type="submit"
          disabled={isLoading}
           >
            {isLoading && <Loader2 className="animate-spin mr-2" size={20}/>}
            {isLoading ? loadingText: children}
          </Button>
    )
}