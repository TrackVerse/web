import {
	SiIgdb,
	SiMyanimelist,
	SiThemoviedatabase,
} from "@icons-pack/react-simple-icons";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
	const { t } = useTranslation();

	return (
		<footer className="bg-border/30 backdrop-blur border-t border-border w-full px-3 md:px-10 py-6">
			<div className="flex flex-col lg:flex-row md:items-center justify-between gap-8">
				<div className="flex flex-col justify-center gap-3">
					<Link to="/">
						<img src="/logo.svg" alt="Logo" className="h-full w-45" />
					</Link>
					<p className="flex gap-1 items-center">
						{t("common:providers.IGDBMetadata")}
						<Link to="https://www.igdb.com" target="_blank">
							<SiIgdb />
						</Link>
					</p>
					<p className="flex gap-1 items-center">
						{t("common:providers.TMDBMetadata")}
						<Link to="https://www.themoviedb.org" target="_blank">
							<SiThemoviedatabase />
						</Link>
					</p>
					<p className="flex gap-1 items-center">
						<Trans
							i18nKey="common:providers.HardCoverMetadata"
							components={{
								1: <Link to="https://hardcover.app" target="_blank" />,
							}}
						/>
					</p>
					<p className="flex gap-1 items-center">
						<Trans
							i18nKey="common:providers.MALMetadata"
							components={{
								mal: (
									<Link to="https://myanimelist.net" target="_blank">
										<SiMyanimelist />
									</Link>
								),
								jikan: <Link to="https://jikan.moe" target="_blank" />,
							}}
						/>
					</p>
				</div>

				<div className="flex max-sm:flex-col gap-8 lg:gap-12 justify-between w-1/2">
					<div className="flex flex-col gap-3">
						<h3 className="text-accent font-bold">{t("common:community")}</h3>

						<Link to="/add-data">{t("common:addData")}</Link>
						<Link to="/about">{t("common:about")}</Link>
						<Link to="/donate">{t("common:donate")}</Link>
						<Link to="/special-thanks">{t("common:credits")}</Link>
						<Link to="https://crowdin.com/project/trackgeek" target="_blank">
							{t("common:translate")}
						</Link>
					</div>

					<div className="flex flex-col gap-3">
						<h3 className="text-accent font-bold">{t("common:legal")}</h3>

						<Link to="/terms">{t("common:terms")}</Link>
						<Link to="/privacy-policy">{t("common:privacy")}</Link>
					</div>

					<div className="flex flex-col gap-3">
						<h3 className="text-accent font-bold">{t("common:socials")}</h3>

						<Link
							to="https://bsky.app/profile/trackgeek.bsky.social"
							target="_blank"
						>
							BlueSky
						</Link>

						<Link to="https://discord.gg/76bcftRnuT" target="_blank">
							Discord
						</Link>

						<Link to="https://www.instagram.com/trackgeekofc" target="_blank">
							Instagram
						</Link>

						<Link to="https://x.com/trackgeekofc" target="_blank">
							X (Twitter)
						</Link>

						<Link to="https://github.com/TrackGeek/" target="_blank">
							GitHub
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
