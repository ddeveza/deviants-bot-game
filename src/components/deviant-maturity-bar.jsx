/* eslint-disable react/prop-types */
export const DeviantMaturityBar = ({ percentage, className }) => {

  return (
    <div className={className}>
      <div className="w-full deviant-maturity h-full bg-[#B3B3B3] overflow-hidden">
        <div className="deviants-bar bg-[#161313] h-full" style={{width: `${percentage}%`}}></div>
      </div>
      
    </div>
  );
};
