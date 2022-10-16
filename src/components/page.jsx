import Header from './header';

export default function Page(props) {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
}
