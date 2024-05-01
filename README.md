                                     Creating a Reusable Container
                    --------------------------------------------------------

To create a reusable container we will create a ui folder in Components folder.
there we will take a container.tsx file
in that file we will create a wraper div , inside the div we will take children(destructured).
now whatever component we want inside this wrapper we can use this container.tsx as
wrapper

Example code of a wrapper container:

import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
return (

<div className="h-full w-full max-w-[1250px] bg-red-500 mx-auto">
{children}
</div>
);
};

export default Container;

                                            /*How to Change tailwind default classes  */
                                    // ---------------------------------------------------------------

/_ To change the default classes of tailwind we will go to tailwind.config.ts . there we will
go into the extend bracket . where we can change the default classes of tailwind in below
manner _/

/\* Example how to change the default classes:

/** @type {import('tailwindcss').Config}
// export default {
// content: [
// "./index.html",
// "./src/**/\*.{js,ts,jsx,tsx}",
// ],
// theme: {
// extend: {
// backgroundImage:{
// 'primary-gradient' : 'linear-gradient(30deg, #06b6d4, #d946ef)',
// }
// },
// },
// plugins: [],
// }

                                                /*How to create tailwind default classes  */
                                    // ---------------------------------------------------------------

/ We can change the value of the default classes of tailwind

to do that we will to index.css . There we will write @layer then will will choose we want
to change the base or components. then we can change the value. usually we will write the
basic codes like h1,p etc in the base. and the custom classes in the components section.

but better option will be to keep those CSS file in a style folder and import it at the TOP of
index.css folder that will also work and will keep our approach clean.

example:

@layer base {
h1{
@apply text-4xl;
}
h2{
@apply text-3xl;
}
h3{
@apply text-2xl;
}
}

@layer components{
.btn{
@apply px-3 py-2;
@apply rounded-md;
}

.btn-primary {
@apply bg-purple-400;
}
.btn-danger{
@apply bg-red-500;
}
}

\*/

                                        /* Colour system issue in Tailwind */
                            // --------------------------------------------------------

/\* If we create a reusable component and we set one colour and we want to keep
an option to change colour as props. then tailwind sheet will create some issues. so solve
that issue we can use npm marge the example of using tailwind marge is given below

example :

import { twMerge } from "tailwind-merge";

const Button = ({ className }: { className: string }) => {
return (
<button className={twMerge(`bg-green-500 ${className}`)}>Click</button>
);
};

export default Button;

\*/

                                                /* Intro to Clsx */
                                    // ------------------------------------

/\* if we want to give custom classes in reuseable component we can use clsx to keep the
syntex cleaner . The uses of clsx is given below

example:

<button
className={twMerge(
clsx("bg-purple-500 px-3 py-2 rounded-md", {
"border border-purple-500 bg-opacity-10": outline,
className,
})
)} >
Click
</button>

\*/

                            /* Making a util to with twMarge and clsx */
                    /* ------------------------------------------------------- */

/\* To create that util we will create a file in src->utils->cn.tsx
there we can write in this manner :

Example:

import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
const cn = (...inputs: ClassValue[]) => {
return twMerge(clsx(inputs));
};

export default cn;

\*/

                                 /*Other Capability as it is at reusable components  */
                        // -----------------------------------------------------------------------

/\* to keep other attribiutes as it is in reuseable components we can give ...rest in porps

example given below:

\*/

                        <!-- To create a modal or overlay types element -->

We will not render the overlay types elements in root . we well render it in portal.
To render anything into portal we have create an extra div under root div in index.html.
Then we can use createPortal which will take 2 things. one is the element i want to render and other is document.getElementById("portal") as Elemnt.

example:
import { createPortal } from "react-dom";
import cn from "../../utils/cn";

const Modal = ({ isOpen, onClose, children }) => {
return createPortal(
<div
className={cn("fixed inset-0 bg-gray-500/70 invisible z-[999]", {
visible: isOpen,
})} >
<div className="bg-white">{children}</div>
</div>,
document.getElementById("portal") as Element
);
};

export default Modal;
