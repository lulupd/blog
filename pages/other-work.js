import Link from "next/link";

export default function OtherWork() {
    return <div className="cardContainer">
        <div className="card">
            <h1>Other Work:</h1>
            <p>Some of my other projects can be found on my main website at: <Link href="https://lulupd.me">lulupd.me</Link></p>
        </div>
    </div>
}