import "../style/index.scss";
import Recipes from "./Recipes";

const App = () =>{
    return(
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh Hi React</h1>
                </section>
            </main>

            <Recipes />
        </>
    )
}

export default App;