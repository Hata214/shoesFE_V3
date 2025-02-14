const renderProductImage = (image) => {
    if (!image) {
        return <img src="/placeholder.jpg" alt="No image" className="w-20 h-20 object-cover" />;
    }

    // Nếu là URL từ server
    if (image.startsWith('/uploads/') || image.startsWith('http')) {
        return (
            <img
                src={`${process.env.REACT_APP_API_URL}${image}`}
                alt="Product"
                className="w-20 h-20 object-cover"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder.jpg';
                }}
            />
        );
    }

    // Nếu là base64
    if (image.startsWith('data:image')) {
        return <img src={image} alt="Product" className="w-20 h-20 object-cover" />;
    }

    // Fallback
    return <img src="/placeholder.jpg" alt="Fallback" className="w-20 h-20 object-cover" />;
};

// Trong phần render table
<td className="px-6 py-4 whitespace-nowrap">
    {renderProductImage(product.image)}
</td> 