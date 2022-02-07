import { Navbar } from "../components/ui/Navbar"
import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../components/DC/DcScreen';
import { MarvelScreen } from '../components/Marvel/Marvel';
import { SearchScreen } from '../components/search/SearchScreen';
import { Hero } from "../components/Hero/Hero";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
            <Routes>
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/hero/:heroId" element={<Hero />} />

                <Route path="/*" element={<MarvelScreen />} />

            </Routes>
            </div>
        </>
    )
}
