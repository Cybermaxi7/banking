"use client";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
// @ts-expected-error
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function MobileNav({ user }: MobileNavProps) {
    const pathname = usePathname();
    return (
        <section className="w-full max-s-[2264px]">
            <Sheet>
                <SheetTrigger>
                    <HiMenuAlt3 className="text-3xl cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    {/* <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </SheetDescription>
                    </SheetHeader> */}
                    <SheetClose asChild>
                        <Link
                            href="/"
                            className="cursor-pointer flex items-center gap-1 px-4"
                        >
                            <Image
                                src="/icons/logo.svg"
                                width={34}
                                height={34}
                                alt="Horizon Logo"
                            />
                            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                                Horizon
                            </h1>
                        </Link>
                    </SheetClose>
                    <div className="mobilenav-sheet w-full !max-w-full">
                        <SheetClose asChild>
                            <nav className="flex h-full w-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((link, index) => {
                                    const isActive =
                                        pathname === link.route ||
                                        pathname.startsWith(`${link.route}/`);
                                    return (
                                        <Link
                                            href={link.route}
                                            key={index}
                                            className={cn(
                                                "mobilenav-sheet_close w-full !max-w-full",
                                                {
                                                    "bg-bank-gradient":
                                                        isActive,
                                                }
                                            )}
                                        >
                                            <Image
                                                src={link.imgURL}
                                                alt={link.label}
                                                width={20}
                                                height={20}
                                                className={cn({
                                                    "brightness-[3] invert-0":
                                                        isActive,
                                                })}
                                            />
                                            <p
                                                className={cn(
                                                    "text-16 font-semibold text-black-2",
                                                    {
                                                        "!text-white": isActive,
                                                    }
                                                )}
                                            >
                                                {link.label}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
}
