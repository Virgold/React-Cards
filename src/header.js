import "./App.css";

export default function Header(){
    return(
        <header className="navbar-dark">
            <button className="navbar-toggler position-absolute d-md-none collapsed end-0 me-4" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </header>
    )
}