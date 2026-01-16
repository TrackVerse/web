import { Bell, Heart, LogIn, Menu } from "lucide-react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface LayoutProps {
	title: string;
	children: React.ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
	const { t, i18n } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{title} | TrackGeek</title>
			</Helmet>

			<div className="bg-background flex flex-col min-h-screen">
				<header className="bg-card border-b border-border w-full h-14 flex items-center justify-between px-5 py-2">
					<div className="flex items-center justify-center gap-3">
						<Button>
							<Menu />
						</Button>
						<Link to="/">
							<img src="/logo.svg" alt="Logo" className="h-full w-45" />
						</Link>
					</div>
					<div className="flex items-center justify-center gap-3">
						<Button variant={"outline"} className="">
							<Heart color="red" fill="red" />
							{t("common:donate")}
						</Button>
						<Button>
							<Bell fill="" />
						</Button>
						<Button>
							<LogIn />
							{t("auth:login")}
						</Button>
					</div>
				</header>
				<main className="flex flex-col px-5 py-5">{children}</main>
			</div>
		</>
	);
}
