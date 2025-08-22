'use client';

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="font-mono whitespace-pre text-[0.6em] leading-[1.2] mb-5 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-4/5 after:h-[3px] after:bg-gradient-to-r after:from-[rgb(var(--lavender))] after:to-[rgb(var(--red))] after:rounded-sm">
{`          
                                                                                  
     #####    ##                                 ##### ##                         
  ######  /  #### /                           /#####  /##                         
 /#   /  /   ####/                          //    /  / ###                        
/    /  /    # #                           /     /  /   ###          ##           
    /  /     #                                  /  /     ###         ##           
   ## ##     #      /##   /##    ###           ## ##      ##    /##   ##    ###   
   ## ##     #     / ### / ###  #### /         ## ##      ##   / ###   ##    ###  
   ## ########    /   ###   ### /###/          ## ##      ##  /   ###  ##     ### 
   ## ##     #   ##    ###   ##/  ##           ## ##      ## ##    ### ##      ## 
   ## ##     ##  ########     /##              ## ##      ## ########  ##      ## 
   #  ##     ##  #######     / ###             #  ##      ## #######   ##      ## 
      /       ## ##         /   ###               /       /  ##        ##      ## 
  /##/        ## ####    / /     ###         /###/       /   ####    / ##      /  
 /  #####      ## ######/ /       ### /     /   ########/     ######/   ######/   
/     ##           ##### /         ##/     /       ####        #####     #####    
#                                          #                                      
 ##                                         ##  
                                                                               `}
      </div>
      <br/><br/>
      <div className="text-[#c0caf5] text-[0.95rem] my-2">lazy developer</div>
      <br/><br/>
    </div>
  );
}
