import React from 'react';

const Privacy = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg">
                        <p className="mb-6">
                            At SneakerVault, we take your privacy seriously. This Privacy Policy explains how we collect,
                            use, disclose, and safeguard your information when you visit our website.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We collect information that you provide directly to us when you:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Create an account</li>
                            <li>Make a purchase</li>
                            <li>Sign up for our newsletter</li>
                            <li>Contact us for support</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Process your orders and payments</li>
                            <li>Send you order confirmations and updates</li>
                            <li>Respond to your comments and questions</li>
                            <li>Send you marketing communications (if you opt in)</li>
                            <li>Improve our website and services</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
                        <p className="mb-6">
                            We do not sell, trade, or otherwise transfer your personal information to third parties
                            without your consent, except as described in this Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
                        <p className="mb-6">
                            We implement appropriate technical and organizational measures to maintain the security of
                            your personal information and protect it against unauthorized or unlawful processing and
                            against accidental loss, destruction, or damage.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
                        <p className="mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt out of marketing communications</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                        <p className="mb-6">
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            Email: privacy@sneakervault.com
                            <br />
                            Phone: +84 (123) 456-789
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
                        <p className="mb-6">
                            We may update this Privacy Policy from time to time. The updated version will be indicated by
                            an updated "Last Updated" date and the updated version will be effective as soon as it is
                            accessible.
                        </p>

                        <p className="text-sm text-gray-600 mt-8">
                            Last Updated: January 16, 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy; 