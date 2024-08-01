import { pages } from "@/config/pages";
import SiteShell from "../shells/site-shell";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";
import { buttonVariants } from "../ui/button";
import EmailForm from "./email-form";
import { Accordion, AccordionItem } from "../ui/accordion";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";

import payment1 from '../../../public/images/visa.png';
import payment2 from '../../../public/images/master-card.png';
import payment3 from '../../../public/images/paypal.png';
import payment4 from '../../../public/images/payoneer.png';
import payment5 from '/images/skrill.png';
import { ModeToggle } from "../themes/mode-toggle";


const Footer = () => {
    const helpAndInfo = [
        ...pages,
        {
            title: 'T&Cs',
            href: '/terms-and-conditions'
        },
        {
            title: 'delivery',
            href: '/delivery'
        },
    ]
  return (
    <div className="bg-[#0f0f0f] text-[#fcfcfc] py-12">
        <SiteShell
            className="space-y-8"
        >
            <div className="flex md:flex-row justify-between gap-y-8 flex-col-reverse">

                <div className="md:space-y-4">
                    {/* Desktop item */}
                    <div className="hidden md:block">
                        <h1 className="text-xl font-bold">Help and Info</h1>
                        <div className="flex flex-col capitalize items-start">
                            {helpAndInfo.map(page => (
                                <Link
                                    to={page.href}
                                    key={page.title}
                                    className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile items */}
                    <Accordion type="multiple" className="md:hidden">
                        <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h1 className="text-xl font-bold">Help and Info</h1>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col capitalize items-start">
                            {helpAndInfo.map((page) => (
                                <Link
                                    to={page.href}
                                    key={page.title}
                                    className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="md:space-y-4">
                    {/* Desktop */}
                    <div className="hidden md:block">
                        <h1 className="text-xl font-bold">
                            Shop
                        </h1>
                        <div className="flex flex-col capitalize items-start">
                            {helpAndInfo.map(page => (
                                <Link
                                    to={page.href}
                                    key={page.title}
                                    className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile items */}
                    <Accordion type="multiple" className="md:hidden">
                        <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h1 className="text-xl font-bold">Shop</h1>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col capitalize items-start">
                            {helpAndInfo.map((page) => (
                                <Link
                                    to={page.href}
                                    key={page.title}
                                    className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="md:space-y-4">
                    <h1 className="text-xl font-bold">
                        Contact
                    </h1>
                    <div className="flex flex-col items-start">
                        <Link
                            to={'eispositive@placeholder.com'}
                            className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                        >
                            eispositive@placeholder.com
                        </Link>

                        <Link
                            to={'#'}
                            className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                        >
                            +1 5263 237902
                        </Link>
                        <div className="w-full flex gap-2">
                            <Link to={'https://www.facebook.com'} className="h-10 aspect-square rounded-full border hover:border-[#fcfcfc]" />
                            <Link to={'https://www.instagram.com'} className="h-10 aspect-square rounded-full border hover:border-[#fcfcfc]" />
                            <Link to={'https://www.youtube.com'} className="h-10 aspect-square rounded-full border hover:border-[#fcfcfc]" />
                        </div>
                    </div>

                </div>
                <div className="md:space-y-4 space-y-2">
                    <h1 className="text-xl font-bold">You have feedback?</h1>
                    <EmailForm />
                    <ModeToggle />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <PaymentCards />
            </div>
        </SiteShell>
    </div>
  )
}

export default Footer


const PaymentCards = () => {
    const images = [payment1,payment2, payment3, payment4, payment5];

    return (
        <div className="flex gap-2">
            {images.map((image, index) => (
                <div className="h-8 w-16" key={index}>
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                        alt=""
                    />
                </div>
            ))}
        </div>
    )
}