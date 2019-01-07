var testCases = [
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3.amazonaws.com',
        'Region': 'us-east-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3.us-west-1.amazonaws.com',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-with-number-1',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-with-number-1.s3.us-west-1.amazonaws.com',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3.cn-north-1.amazonaws.com.cn',
        'Region': 'cn-north-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'BucketName',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.amazonaws.com/BucketName',
        'Region': 'us-east-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket_name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.us-west-1.amazonaws.com/bucket_name',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket.name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.us-west-1.amazonaws.com/bucket.name',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': '-bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.us-west-1.amazonaws.com/-bucket-name',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-name-',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.us-west-1.amazonaws.com/bucket-name-',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'aa',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.us-west-1.amazonaws.com/aa',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.us-west-1.amazonaws.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3-accelerate.amazonaws.com',
        'Region': 'us-east-1',
        'UseDualstack': false,
        'UseS3Accelerate': true
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3-accelerate.amazonaws.com',
        'Region': 'us-west-1',
        'UseDualstack': false,
        'UseS3Accelerate': true
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3.dualstack.us-east-1.amazonaws.com',
        'Region': 'us-east-1',
        'UseDualstack': true,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3.dualstack.us-west-2.amazonaws.com',
        'Region': 'us-west-2',
        'UseDualstack': true,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket.name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://s3.dualstack.us-west-2.amazonaws.com/bucket.name',
        'Region': 'us-west-2',
        'UseDualstack': true,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'default',
        'ExpectedUri': 'https://bucket-name.s3-accelerate.dualstack.amazonaws.com',
        'Region': 'us-east-1',
        'UseDualstack': true,
        'UseS3Accelerate': true
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'path',
        'ExpectedUri': 'https://s3.amazonaws.com/bucket-name',
        'Region': 'us-east-1',
        'UseDualstack': false,
        'UseS3Accelerate': false
    },
    {
        'Bucket': 'bucket-name',
        'ConfiguredAddressingStyle': 'path',
        'ExpectedUri': 'https://s3.dualstack.us-east-1.amazonaws.com/bucket-name',
        'Region': 'us-east-1',
        'UseDualstack': true,
        'UseS3Accelerate': false
    }
];

module.exports = {
    testCases: testCases
};