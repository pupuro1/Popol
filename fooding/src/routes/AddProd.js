/*
작성자: 김지환, 조경익
수정일자: 2023-10-18
내용: 상품등록 페이지
*/
import React, { useState } from "react"; 
import { Form, Divider, Input, InputNumber, Button, Upload, Select } from 'antd'; //엔트디 사용
import axios from 'axios'; // 서버에 요청 보낼려면 필요
import { useNavigate } from 'react-router-dom'; // 주소 바꿀수 있는 훅 
import '../scss/upload.scss'; // scss적용
import { API_URL } from '../config/contansts' // http://localhost:8080

const { Option, OptGroup } = Select;

const AddProd = () => {
    const navigate = useNavigate(); 

    // 이미지 경로 상태관리 추가
    const [imageUrl, setImageUrl ] = useState(null);

    // 이미지 처리함수
    const onChangeImage = (info) => {
        // 파일이 업로드 중일 때
        console.log("upload/index.js/onChangeImage() info.file: ",info.file)
        console.log('info',info);
        if(info.file.status === "uploading"){
            return;
        }
        // 파일이 업로드 완료 되었을 때
        if(info.file.status === "done") {
            const response = info.file.response;
            console.log(response);
            const imageUrl = response.imageUrl;
            // 받은 이미지경로를 imageUrl에 넣어줌
            setImageUrl(imageUrl); //이미지 선택하면 이미지 url넣음
        }
    }
    const onSubmit = (values) => { //이미지 선택하고 확인 버튼 눌렀을때
        console.log("values", values);
        // 서버로 데이터 전송하기
        axios.post(`${API_URL}/products`, {
            name: values.name,
            kind: values.kind,
            price: values.price,
            imageUrl: imageUrl,
            content: values.content
        }).then((result)=>{
            console.log(result)
            navigate("/");
        })
        .catch(e=>{
            console.log(e);
        })
    }

    return(
    <div id="upload-container" className='inner'>
            <Form name="productUpload" onFinish={onSubmit}>
                <Form.Item name="imgUpload"
                    label={<div className='upload-label'>상품사진</div>}>
                    <Upload name="image" action={`${API_URL}/image`} listType="picture" showUploadList={false} onChange={onChangeImage}>
                        {/* 업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면
                        회색배경에 업로드 아이콘이 나타나도록 ... */}
                        { imageUrl ? <img src={imageUrl} //삼항연산자
                        alt="" width= "200px" height= "200px" /> : 
                                (<div id="upload-img-placeholder">
                                <img src="images/icons/camera.png" alt="" />
                                <span>이미지를 업로드 해주세요.</span>
                        </div>)}    
                    </Upload>
                </Form.Item>
                <Divider/> {/* Divider: 인풋 사이사이 반투명 구분선 */}
                <Form.Item name="name"
                label={<div className='upload-label'>상품이름</div>}>
                    <Input
                        className='upload-name'
                        size='large'
                        placeholder='상품 이름을 입력해주세요'/>
                </Form.Item>
                <Divider/>
                <Form.Item name="kind" label={<div className='upload-label'>카테고리</div>}>
                    <Select name="kind"defaultValue="상품 카테고리를 선택해주세요"style={{width: 120}}>
                        <OptGroup label="과일">
                            <Option value="1-1">사과/배</Option>
                            <Option value="1-2">감귤/만감류</Option>
                            <Option value="1-3">수박/멜론</Option>
                            <Option value="1-4">냉동/간편과일</Option>
                            <Option value="1-5">기타과일</Option>
                        </OptGroup>
                        <OptGroup label="채소">
                            <Option value="2-1">신선야채</Option>
                            <Option value="2-2">냉동야채</Option>
                            <Option value="2-3">건조야채</Option>
                        </OptGroup>
                        <OptGroup label="쌀/잡곡">
                            <Option value="3-1">국내쌀/수입쌀</Option>
                            <Option value="3-2">잡곡</Option>
                            <Option value="3-3">견과류</Option>
                        </OptGroup>
                        <OptGroup label="육류/계란류">
                            <Option value="4-1">생고기</Option>
                            <Option value="4-2">양념육</Option>
                            <Option value="4-3">알류</Option>
                        </OptGroup>
                        <OptGroup label="수산물">
                            <Option value="5-1">생선류</Option>
                            <Option value="5-2">조개류</Option>
                            <Option value="5-3">새우/해산물</Option>
                            <Option value="5-4">오징어/낙지/초밥용</Option>
                        </OptGroup>
                    </Select>
                </Form.Item>
                <Divider/>
                <Form.Item name="price"
                label={<div className='upload-label'>상품가격</div>}>
                    <InputNumber defaultValue={0} size="large"/>
                </Form.Item>
                <Divider/>
                <Form.Item name="content"
                label={<div className='upload-label'>상품소개</div>}>
                <Input.TextArea
                    size='large'
                    id = "product-content"
                    maxLength={1000} //최대 1000자까지
                    placeholder="상품 소개를 적어주세요"
                />
                </Form.Item>
                <Form.Item>
                    <Button id="submit-button" size="large" htmlType='submit'>
                        상품등록하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
  )
}

export default AddProd;