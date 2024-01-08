import { Route, Routes } from "react-router-dom";
import { SplashScreenLayout } from "./layouts/SplashScreenLayout";
import { SplashScreen } from "./pages/SplashScreen";
import { Cadastro } from "./pages/Cadastro";
import { TesteLayout } from "./layouts/TesteLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreenLayout />} >
        <Route path="/" element={<SplashScreen />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
      <Route path="/teste" element={<TesteLayout />}>
        <Route path="/teste" element={<SplashScreen />} />
        <Route path="/teste" element={<Cadastro />} />
      </Route>
    </Routes>
  )
}