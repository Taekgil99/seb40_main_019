import '../css/Order.scss';
import { handleDelivery, handleDeliveryAlert } from '../../../util/api/order';
import ModalYesorNo from '../../modal/js/ModalYesorNo';
import { useState } from 'react';

export default function Order({ item }) {
  let status = '상품준비중';
  if (item.orderStatus === 'SHIPPING') status = '배송중';
  else if (item.orderStatus === 'SHIPPED') status = '배송 완료';
  else if (item.orderStatus === 'CANCLE') status = '주문 취소';

  const [modalOn, setModalOn] = useState(false);
  const [modalText, setModalText] = useState('');

  const clickDelivery = () => {
    handleDeliveryAlert(setModalText, setModalOn);
  };

  const clickDeliveryOk = () => {
    handleDelivery(item.orderId);
  };
  return (
    <div className="sellerproduct order">
      {/* <div className="createdAt">
        <p>{item.orderDate}</p>
      </div> */}
      <div className="orderContainer">
        <div className="productBtn">
          {status === '상품준비중' ? (
            <button className="delivery" onClick={clickDelivery}>
              발송처리
            </button>
          ) : (
            <h3>{status}</h3>
          )}
        </div>
        <div className="orderInfo">
          <span>{item.receiverName}</span>
          <span>{item.receiverAddress}</span>
        </div>
        <div className="orderBox">
          {item.orderProductDtoList.map((item) => {
            return (
              <div className="sellerOrderContent" key={item.productId}>
                <img className="titleImg" src={item.imgUrl} alt="productImg" />
                <div className="title">{item.productName}</div>
                <div className="orderCount">{item.quantity} 개</div>
              </div>
            );
          })}
        </div>
      </div>
      <ModalYesorNo
        setModalOn={setModalOn}
        modalOn={modalOn}
        modalText={modalText}
        api={clickDeliveryOk}
      />
    </div>
  );
}
