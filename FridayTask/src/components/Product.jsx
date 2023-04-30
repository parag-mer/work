export default function Product(props)
{
    return(
        <div className="card">
            <img className="card-img-top" src={props.data.thumbnail} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.data.name}</h5>               
                            {props.data.price}
                    </div>
                </div>                
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>
    );
}