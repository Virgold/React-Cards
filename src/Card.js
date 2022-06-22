import "./App.css"

export default function Card(props){
    return(
        <section className="col-12 col-md-4 mt-5 mt-md-3"> 
                    <div className="text-center justify-content-center">
                        <div className="card border-0 shadow-sm">
                        <img src={props.items.imageUrl} className="card-img img-fluid rounded-circle" alt="..."/>
                            <div className="card-body">
                                <p>{props.items.location}</p>
                                <h3 className="card-title">{props.items.name}</h3>
                                <small className="fw-bold">{props.items.email}</small>
                                <p className="card-text">{props.items.address}</p>
                                <a href="/" className="btn btnPrimary rounded-pill px-3 contact">Contact</a>
                            </div>
                        </div>
                    </div>
        </section>
        
    )
}