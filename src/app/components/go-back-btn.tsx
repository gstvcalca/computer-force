import { styled } from 'styled-components';
import { GoBackIcon } from './icons/go-back-icon';
import { useRouter } from 'next/navigation';

const Btn = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    gap: .5em;
    padding: 1.2em 0;
    cursor: pointer;
`

export function GoBackBtn(){
    const router = useRouter();
    const handleChange = () => {
        router.push('/')
    };
    return(
        <Btn onClick={() => handleChange()}>
            <GoBackIcon/>
            Voltar
        </Btn>
    )
}