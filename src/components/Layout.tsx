import { Footer } from "./Footer"
import { Header } from "./Header/Header"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout = ({children}: any) => {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}