import { useState } from "react";
import { reorderList } from "../utils/reorderList";

export  function useReorderableList(data) {
      const[list,setList] = useState(()=>[...data]);

      function reorder(fromIndex,toIndex){
        setList(prev => reorderList(prev,fromIndex,toIndex));
      }


      return (
        {
          items:list,
          reorder
        }
      )

}


