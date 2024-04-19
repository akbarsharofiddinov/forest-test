import React from "react";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { useAppDispatch } from "../../store/hooks";
import { setFeedModal } from "../../store/storeSlice/storeSlice";

const SectionHeader: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="section-header">
      <div className="container">
        <div className="infos">
          <div>
            <div className="infos-top">
              <span>
                <FiPhone color="#499494" fontSize={22} />
                <a href="tel:+998990950007">+998 99 095 00 07</a>
              </span>
            </div>
            <div className="infos-btm">
              <span>
                <GrLocation color="#499494" fontSize={22} />
                Адрес 27-мкр <br /> на против мечет
              </span>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => {
              dispatch(setFeedModal(true));
            }}
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
