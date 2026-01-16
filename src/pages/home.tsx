import { Layout } from "@/components/layouts/main";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function HomePage() {
	return (
		<Layout title="Home">
			<div className="flex gap-5">
				<div className="flex flex-col w-4/5">
					<Tabs defaultValue="following">
						<TabsList className="w-1/3 mx-auto">
							<TabsTrigger value="following">Following</TabsTrigger>
							<TabsTrigger value="global">Global</TabsTrigger>
							<TabsTrigger value="trending">Trending</TabsTrigger>
						</TabsList>
						<TabsContent value="following"></TabsContent>
						<TabsContent value="global"></TabsContent>
						<TabsContent value="trending"></TabsContent>
					</Tabs>
				</div>
				<div className="flex flex-col w-1/5">
					<h1>Sidebar</h1>
				</div>
			</div>
		</Layout>
	);
}
