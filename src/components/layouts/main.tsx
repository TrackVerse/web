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
				<main className="flex flex-col grow px-5 py-5">{children}</main>
				<footer className="bg-card border-t border-border w-full px-10 py-6">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-8">
						<div className="flex flex-col items-center justify-center gap-3">
							<Link to="/">
								<img src="/logo.svg" alt="Logo" className="h-full w-45" />
							</Link>
						</div>
						<div className="flex flex-row gap-8 lg:gap-12 justify-between w-1/2">
							<div className="flex flex-col gap-3">
								<h3 className="text-accent font-bold">{t("common:community")}</h3>
								<Link to="/">{t("common:addData")}</Link>
								<Link to="/">{t("common:about")}</Link>
								<Link to="/">{t("common:become")} Premium</Link>
								<Link to="/">{t("common:community")}</Link>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="text-accent font-bold">{t("common:legal")}</h3>
								<Link to="/">{t("common:terms")}</Link>
								<Link to="/">{t("common:privacy")}</Link>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="text-accent font-bold">{t("common:socials")}</h3>
								<Link to="/">BlueSky</Link>
								<Link to="/">Discord</Link>
								<Link to="/">Instagram</Link>
								<Link to="/">Twitter</Link>
								<Link to="/">GitHub</Link>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
