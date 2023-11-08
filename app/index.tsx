import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/navbar";
import InputSearch from "../components/input-search";
import ListCategories from "../components/list-categories";
import PopularSiteList from "../components/populars-sites-list";
import BottomNavBar from "../components/bottom-navbar";

export default function InitPage() {
  return (
    <>
      <SafeAreaView>
        <NavBar />
        <InputSearch />
        <ListCategories />
        <PopularSiteList />
      </SafeAreaView>
      <BottomNavBar />
    </>
  );
}
