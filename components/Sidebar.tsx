"use client";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
// @ts-ignore
import { usePathname } from "next/navigation";
export default function Sidebar({ user }: SidebarProps) {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="mb-12 cursor-pointer flex items-center gap-2"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon Logo"
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>
                {sidebarLinks.map((link, index) => {
                    const isActive =
                        pathname === link.route ||
                        pathname.startsWith(`${link.route}/`);
                    return (
                        <Link
                            href={link.route}
                            key={index}
                            className={cn("sidebar-link", {
                                "bg-bank-gradient": isActive,
                            })}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    fill
                                    className={cn({
                                        "brightness-[3] invert-0": isActive,
                                    })}
                                />
                            </div>
                            <p
                                className={cn("sidebar-label", {
                                    "!text-white": isActive,
                                })}
                            >
                                {link.label}
                            </p>
                        </Link>
                    );
                })}
                USER
            </nav>
            FOOTER
        </section>
    );
}
