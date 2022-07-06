import * as Default from '../../../Default';
import * as Community from '../Community';
import * as Styled from './Styled';
import Button from "../../../Components/Button";
import CommunityButton from '../../../Components/CommunityButton';
import Toggle from '../../../Components/Toggle';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [baekjoonId, setBaekjoonId] = useState("")

    const handleInputId = (e) => {
        setId(e.target.value)
    }
    const handleInputPw = (e) => {
        setPw(e.target.value)
    }
    const handleInputBaekjoonId = (e) => {
        setBaekjoonId(e.target.value)
    }

    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await axios.post("/user/register", {
    //             username,
    //             password,
    //             option
    //         })
    //     }
    //     getData()
    // })

    return (
        <Styled.Container>
            <Styled.SignUpTypo>Sign Up</Styled.SignUpTypo>
            <Community.InfoContainer>
                <Community.InfoContainerLabel>기본 정보</Community.InfoContainerLabel>
                <Community.InfoSubContainer>
                    <Community.InfoLabel>ID</Community.InfoLabel>
                    <Community.Input placeholder='id' id="new_id" type="text" onChange={handleInputId} />
                    <CommunityButton typo="중복확인" />
                </Community.InfoSubContainer>
                <Community.InfoSubContainer>
                    <Community.InfoLabel>PW</Community.InfoLabel>
                    <Community.Input placeholder='pw' id="new_pw" type="password" onChange={handleInputPw} />
                </Community.InfoSubContainer>
            </Community.InfoContainer>
            <Community.InfoContainer>
                <Community.InfoContainerLabel>BaekJoon 정보</Community.InfoContainerLabel>
                <Community.InfoSubContainer>
                    <Community.InfoLabel>BaekJoon ID</Community.InfoLabel>
                    <Community.ShortInput placeholder='백준 id' id="baekjoon_id" type="text" onChange={handleInputBaekjoonId} />
                </Community.InfoSubContainer>
                <Styled.BaekjoonLink to={{ pathname: "https://www.acmicpc.net/" }} target="_blank">baekjoon online judge 바로 가기</Styled.BaekjoonLink>
            </Community.InfoContainer>
            <Community.InfoContainer>
                <Community.InfoContainerLabel>Filter</Community.InfoContainerLabel>
                <Toggle typo1="Daily" typo2="Schedule" element1={<Community.DailyFilter />} element2={<Community.ScheduleFilter />} />
            </Community.InfoContainer>
            <Default.StyledLink to="/recommend"><Button typo="Sign Up" /></Default.StyledLink>
        </Styled.Container>
    )
}

export default SignUp;