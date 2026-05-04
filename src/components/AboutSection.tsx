import React from 'react';

const AboutSection = () => {
  const features = [
    {
      title: "Phương pháp giảng dạy hiện đại",
      description: "Áp dụng các phương pháp giảng dạy tiên tiến từ các nước phát triển",
      icon: "📚"
    },
    {
      title: "Giáo viên chất lượng cao",
      description: "Đội ngũ giáo viên có trình độ cao, nhiều kinh nghiệm giảng dạy",
      icon: "👩‍🏫"
    },
    {
      title: "Lớp học quy mô nhỏ",
      description: "Mỗi lớp học chỉ từ 10-15 học sinh để đảm bảo chất lượng",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Theo dõi tiến độ học tập",
      description: "Hệ thống theo dõi tiến độ học tập chi tiết cho từng học sinh",
      icon: "📊"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">Về English Center</h2>

      <div className="mb-12">
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          English Center là trung tâm dạy tiếng Anh uy tín với hơn 10 năm kinh nghiệm,
          đã đào tạo hơn 5000 học viên thành công. Chúng tôi cam kết mang đến chất lượng
          giảng dạy hàng đầu và môi trường học tập hiệu quả.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
