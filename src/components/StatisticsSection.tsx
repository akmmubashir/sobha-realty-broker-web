import React from 'react';
import { StatCounter } from './StatCounter';

export function StatisticsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatCounter value={45} suffix="+" label="Years Experience" index={0} />
          <StatCounter value={120} suffix="" label="Awards Won" index={1} />
          <StatCounter value={850} suffix="+" label="Properties Sold" index={2} />
          <StatCounter value={2} suffix="B+" label="Value Delivered" index={3} />
        </div>
      </div>
    </section>
  );
}
