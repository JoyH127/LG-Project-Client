export default function Search ({key}) {
    return <section>
        <div className="Search">
            <input type= "text" placeholder="Search for.." 
            value={key}
            onChange= {(e)=> {

            }}></input>
            <button>Search</button>
        </div>
    </section>
}