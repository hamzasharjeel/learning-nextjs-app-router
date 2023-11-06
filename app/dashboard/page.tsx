//next js 13 uses a version of file based routing in which each file called page.tsx is inside a folder the name of that particular folder will be the name url to access the page.tsx of that folder so to create a page just make a folder i.e dashboard then just make page.tsx include jsx and logic in page.tsx then just access the page by writing /dashboard and do this no matter how much nested

export default function Page() {
    return <p>Dashboard Page</p>;
}