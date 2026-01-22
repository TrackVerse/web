import { Filter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FeedListFollowing } from "@/components/feed/listFollowing";
import { Layout } from "@/components/layouts/main";
import { StillWatching } from "@/components/sidebar/stillWatching";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LANGUAGE_TOKEN, supportedLanguages } from "@/lib/i18n/config";
import { StillReading } from "@/components/sidebar/stillReading";

export function HomePage() {
	const { t, i18n } = useTranslation();

	return (
		<Layout title="Home">
			<div className="flex gap-5">
				<div className="flex flex-col w-2/3">
					<Tabs defaultValue="following">
						<div className="flex items-center justify-between gap-3 mb-2">
							<TabsList className="w-2/4">
								<TabsTrigger value="following">
									{t("feed:following")}
								</TabsTrigger>
								<TabsTrigger value="global">{t("feed:global")}</TabsTrigger>
								<TabsTrigger value="trending">{t("feed:trending")}</TabsTrigger>
							</TabsList>
							<Button variant="default">
								<Filter />
							</Button>
						</div>
						<TabsContent value="following">
							<FeedListFollowing />
						</TabsContent>
						<TabsContent value="global"></TabsContent>
						<TabsContent value="trending"></TabsContent>
					</Tabs>
				</div>
				<div className="flex flex-col gap-4 w-1/3">
					<StillWatching
						items={[
							{
								coverURL:
									"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx177937-Tzgg6rAdhCoH.jpg",
								episode: 3,
								totalEpisodes: 13,
								link: "/",
							},
							{
								coverURL:
									"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/20548.jpg",
								episode: 10,
								totalEpisodes: 51,
								link: "/",
							},
							{
								coverURL:
									"https://www.themoviedb.org/t/p/w1280/70kTz0OmjjZe7zHvIDrq2iKW7PJ.jpg",
								episode: 96,
								totalEpisodes: 131,
								link: "/",
							},
							{
								coverURL:
									"https://image.tmdb.org/t/p/w1280/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
								episode: 41,
								totalEpisodes: 42,
								link: "/",
							},
						]}
					/>
					<StillReading
						items={[
							{
								coverURL:
									"https://assets.hardcover.app/editions/30399846/4434002844651.jpg",
								page: 284,
								totalPages: 304,
								link: "/",
							},
							{
								coverURL:
									"https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx131640-pkggtmw8VUwa.jpg",
								page: 23,
								totalPages: 131,
								link: "/",
							},
						]}
					/>
					<select
						className="p-2 border rounded-md"
						value={i18n.language}
						onChange={(e) => {
							i18n.changeLanguage(e.target.value);

							localStorage.setItem(LANGUAGE_TOKEN, e.target.value);
						}}
					>
						{supportedLanguages.map((lang) => (
							<option key={lang.id} value={lang.id}>
								{t(lang.name as any)}
							</option>
						))}
					</select>
				</div>
			</div>
		</Layout>
	);
}
