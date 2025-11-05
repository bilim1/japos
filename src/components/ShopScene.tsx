import { ReactNode, useEffect, useState } from 'react';

interface ShopSceneProps {
  children: ReactNode;
  cashRegister: number;
}

export default function ShopScene({ children, cashRegister }: ShopSceneProps) {
  const [prevCashRegister, setPrevCashRegister] = useState(cashRegister);
  const [isAnimating, setIsAnimating] = useState(false);
  const [changeType, setChangeType] = useState<'increase' | 'decrease' | null>(null);

  useEffect(() => {
    if (cashRegister !== prevCashRegister) {
      setChangeType(cashRegister > prevCashRegister ? 'increase' : 'decrease');
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setPrevCashRegister(cashRegister);
      }, 500);
    }
  }, [cashRegister, prevCashRegister]);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] bg-gradient-to-b from-amber-100 to-orange-200 rounded-xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-orange-300">
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-orange-800 border-b-2 md:border-b-4 border-orange-900">
        <div className="flex items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
            🏪 ЯПОША 🏪
          </h2>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-orange-300 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-orange-900 border-t-2 md:border-t-4 border-orange-950" />
      </div>


      <div className="absolute top-20 md:top-32 right-2 md:right-8">
        <div className="space-y-1 md:space-y-2">
          <div className="bg-orange-500 w-12 h-16 md:w-20 md:h-24 rounded-lg shadow-lg border-2 border-orange-700 flex items-center justify-center text-2xl md:text-3xl">
            🥤
          </div>
          <div className="bg-red-500 w-12 h-16 md:w-20 md:h-24 rounded-lg shadow-lg border-2 border-red-700 flex items-center justify-center text-2xl md:text-3xl">
            🌶️
          </div>
        </div>
      </div>

      <div className="absolute left-2 md:left-1/4 top-1/2 transform -translate-y-1/2 md:-translate-x-20 z-10">
        {children}
      </div>
    </div>
  );
}
