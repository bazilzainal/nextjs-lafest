import {Container} from 'react-bootstrap';
export default function Section({children}) {
    return (
        <div>
            <Container>
                <>{children}</>
            </Container>

            <style jsx>{`
                div {
                    background-color: #f5f5f5;
                    padding: 20px;
                    min-height: 30vh;
                }


            `}</style>
        </div>
    );
}
