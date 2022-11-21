import axios from 'axios';

axios.defaults['withCredentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

// 한글 이름만
let reg_name1 = /^[가-힣]+$/;
// 문자와 특수문자 조합의 6~24 자리
// let reg_pw2 = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/;
// 휴대폰 번호
let reg_mobile = /^\d{3}-\d{3,4}-\d{4}$/;

// 유저 정보 상세 조회
export const getUserInfo = async () => {
  try {
    console.log('유저 정보 상세조회 내부');
    // const res = await axios.get(`${REACT_APP_API_URL}users`);
    // console.log(res);
    // return res;
  } catch (error) {
    return error.response.data;
  }
};
// 유저 정보 수정
export const editUserInfo = async (data) => {
  let check = window.confirm('회원 정보를를 수정하시겠습니까?');
  if (check) {
    // 닉네임 유효성 확인
    if (data.nickname.length < 2 || data.nickname.length > 16) {
      window.alert('2자~16자 사이의 닉네임을 입력해주세요');
      return;
    }
    // 비밀번호 유효성 확인

    // 이름 유효성 확인
    if (!reg_name1.test(data.name)) {
      window.alert('올바른 이름을 입력해주세요');
      return;
    }
    // 휴대폰 번호 유효성 확인
    if (!reg_mobile.test(data.phone)) {
      window.alert('-를 포함하여 휴대폰 번호 11자리를 입력해주세요.');
      return;
    }
    try {
      console.log('유저 정보 수정 내부');
      console.log(data);
      console.log(REACT_APP_API_URL);
      // const res = await axios.patch(`${REACT_APP_API_URL}users`, data);
      // console.log(res);
      // return res;
      window.alert('회원 정보 수정 완료.');
    } catch (error) {
      return error.response.data;
    }
  }
};
// 유저 계정 삭제
export const deleteUserAccount = async () => {
  let check = window.confirm('회원 탈퇴를 진행하시겠습니까?');
  if (check) {
    try {
      console.log('유저 정보 삭제 내부');
      // const res = await axios.delete(`${REACT_APP_API_URL}users`);
      // console.log(res);
      // return res;
      window.alert('회원 탈퇴 완료.');
    } catch (error) {
      return error.response.data;
    }
  }
};
