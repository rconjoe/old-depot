export default {
    "scalars": [
        1,
        9,
        11,
        12,
        13,
        15,
        17,
        21,
        30,
        31,
        32,
        34,
        37,
        39,
        66,
        71,
        78,
        80,
        81,
        89,
        91,
        97,
        99,
        100,
        116,
        117,
        151,
        205,
        208,
        213,
        214,
        216,
        234,
        236,
        239,
        243,
        244,
        245,
        260,
        267,
        276,
        279,
        285,
        287,
        292,
        294,
        295,
        301,
        326,
        333
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ActiveFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                71
            ],
            "createdAt": [
                34
            ],
            "customer": [
                248
            ],
            "deltaLevel": [
                71
            ],
            "id": [
                78
            ],
            "matchedIcpEmail": [
                239
            ],
            "monthlyEstimatedUsage": [
                71
            ],
            "numConfigFile": [
                81
            ],
            "numCronSchedule": [
                81
            ],
            "numDeploys": [
                81
            ],
            "numEnvs": [
                81
            ],
            "numFailedDeploys": [
                81
            ],
            "numHealthcheck": [
                81
            ],
            "numIconConfig": [
                81
            ],
            "numRegion": [
                81
            ],
            "numReplicas": [
                81
            ],
            "numRootDirectory": [
                81
            ],
            "numSeats": [
                81
            ],
            "numServices": [
                81
            ],
            "numSupportRequests": [
                81
            ],
            "numVariables": [
                81
            ],
            "numWatchPatterns": [
                81
            ],
            "totalCores": [
                71
            ],
            "totalDisk": [
                71
            ],
            "totalNetwork": [
                71
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                99
            ],
            "tags": [
                101
            ],
            "value": [
                71
            ],
            "__typename": [
                239
            ]
        },
        "AllDomains": {
            "customDomains": [
                22
            ],
            "serviceDomains": [
                222
            ],
            "__typename": [
                239
            ]
        },
        "ApiToken": {
            "displayToken": [
                239
            ],
            "id": [
                78
            ],
            "name": [
                239
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                239
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "BanReasonHistory": {
            "actor": [
                299
            ],
            "banReason": [
                239
            ],
            "createdAt": [
                34
            ],
            "id": [
                78
            ],
            "__typename": [
                239
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "BigInt": {},
        "BillingPeriod": {
            "end": [
                34
            ],
            "start": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CertificatePublicData": {
            "domainNames": [
                239
            ],
            "expiresAt": [
                34
            ],
            "fingerprintSha256": [
                239
            ],
            "issuedAt": [
                34
            ],
            "keyType": [
                91
            ],
            "__typename": [
                239
            ]
        },
        "CertificateStatus": {},
        "CnameCheck": {
            "link": [
                239
            ],
            "message": [
                239
            ],
            "status": [
                17
            ],
            "__typename": [
                239
            ]
        },
        "CnameCheckStatus": {},
        "Container": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "environment": [
                47
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "migratedAt": [
                34
            ],
            "plugin": [
                111
            ],
            "pluginId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Credit": {
            "amount": [
                71
            ],
            "createdAt": [
                34
            ],
            "customerId": [
                239
            ],
            "id": [
                78
            ],
            "memo": [
                239
            ],
            "type": [
                21
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "CreditTransferMetrics": {
            "creditTransferAvg": [
                71
            ],
            "creditTransferCount": [
                81
            ],
            "creditTransferSum": [
                81
            ],
            "__typename": [
                239
            ]
        },
        "CreditType": {},
        "CustomDomain": {
            "cnameCheck": [
                16
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                239
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "status": [
                24
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                239
            ],
            "environmentId": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "CustomDomainStatus": {
            "cdnProvider": [
                13
            ],
            "certificateStatus": [
                15
            ],
            "certificates": [
                14
            ],
            "dnsRecords": [
                33
            ],
            "__typename": [
                239
            ]
        },
        "Customer": {
            "appliedCredits": [
                71
            ],
            "billingEmail": [
                239
            ],
            "billingPeriod": [
                10
            ],
            "creditBalance": [
                71
            ],
            "credits": [
                26,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "defaultPaymentMethod": [
                107
            ],
            "defaultPaymentMethodId": [
                239
            ],
            "id": [
                78
            ],
            "invoices": [
                28
            ],
            "isPrepaying": [
                11
            ],
            "isTrialing": [
                11
            ],
            "isUsageSubscriber": [
                11
            ],
            "planLimitOverride": [
                109
            ],
            "remainingUsageCreditBalance": [
                71
            ],
            "state": [
                245
            ],
            "stripeCustomerId": [
                239
            ],
            "subscriptions": [
                29
            ],
            "teamId": [
                239
            ],
            "usageLimit": [
                296
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                27
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                19
            ],
            "__typename": [
                239
            ]
        },
        "CustomerInvoice": {
            "amountPaid": [
                71
            ],
            "hostedURL": [
                239
            ],
            "invoiceId": [
                239
            ],
            "items": [
                242
            ],
            "paymentIntentStatus": [
                239
            ],
            "pdfURL": [
                239
            ],
            "periodEnd": [
                239
            ],
            "periodStart": [
                239
            ],
            "status": [
                239
            ],
            "subscriptionId": [
                239
            ],
            "total": [
                81
            ],
            "__typename": [
                239
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                34
            ],
            "cancelAt": [
                239
            ],
            "cancelAtPeriodEnd": [
                11
            ],
            "couponId": [
                239
            ],
            "discounts": [
                241
            ],
            "id": [
                239
            ],
            "items": [
                242
            ],
            "latestInvoiceId": [
                239
            ],
            "nextInvoiceCurrentTotal": [
                81
            ],
            "nextInvoiceDate": [
                239
            ],
            "status": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                239
            ],
            "fqdn": [
                239
            ],
            "hostlabel": [
                239
            ],
            "purpose": [
                30
            ],
            "recordType": [
                32
            ],
            "requiredValue": [
                239
            ],
            "status": [
                31
            ],
            "zone": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "DateTime": {},
        "Deployment": {
            "canRedeploy": [
                11
            ],
            "canRollback": [
                11
            ],
            "createdAt": [
                34
            ],
            "creator": [
                299
            ],
            "environment": [
                47
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "meta": [
                37
            ],
            "projectId": [
                239
            ],
            "service": [
                217
            ],
            "serviceId": [
                239
            ],
            "snapshotId": [
                239
            ],
            "staticUrl": [
                239
            ],
            "status": [
                39
            ],
            "suggestAddServiceDomain": [
                11
            ],
            "updatedAt": [
                34
            ],
            "url": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "DeploymentListInput": {
            "environmentId": [
                239
            ],
            "includeDeleted": [
                11
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "status": [
                40
            ],
            "__typename": [
                239
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                34
            ],
            "id": [
                78
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                39
            ],
            "notIn": [
                39
            ],
            "__typename": [
                239
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                239
            ],
            "branch": [
                239
            ],
            "checkSuites": [
                11
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "projectId": [
                239
            ],
            "provider": [
                239
            ],
            "repository": [
                239
            ],
            "serviceId": [
                239
            ],
            "validCheckSuites": [
                81
            ],
            "__typename": [
                239
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                239
            ],
            "checkSuites": [
                11
            ],
            "environmentId": [
                239
            ],
            "projectId": [
                239
            ],
            "provider": [
                239
            ],
            "repository": [
                239
            ],
            "rootDirectory": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                239
            ],
            "checkSuites": [
                11
            ],
            "repository": [
                239
            ],
            "rootDirectory": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Domain": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                239
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "updatedAt": [
                34
            ],
            "on_CustomDomain": [
                22
            ],
            "on_ServiceDomain": [
                222
            ],
            "__typename": [
                239
            ]
        },
        "DomainAvailable": {
            "available": [
                11
            ],
            "message": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "DomainWithStatus": {
            "cdnProvider": [
                13
            ],
            "certificateStatus": [
                15
            ],
            "certificates": [
                14
            ],
            "dnsRecords": [
                33
            ],
            "domain": [
                44
            ],
            "__typename": [
                239
            ]
        },
        "Environment": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deploymentTriggers": [
                49,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "deployments": [
                51,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "id": [
                78
            ],
            "isEphemeral": [
                11
            ],
            "meta": [
                53
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceInstances": [
                55,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "sourceEnvironment": [
                47
            ],
            "unmergedChangesCount": [
                81
            ],
            "updatedAt": [
                34
            ],
            "variables": [
                58,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "volumeInstances": [
                60,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentCreateInput": {
            "ephemeral": [
                11
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "skipInitialDeploys": [
                11
            ],
            "sourceEnvironmentId": [
                239
            ],
            "stageInitialChanges": [
                11
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                50
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                41
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                52
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                35
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                239
            ],
            "branch": [
                239
            ],
            "prCommentId": [
                81
            ],
            "prNumber": [
                81
            ],
            "prRepo": [
                239
            ],
            "prTitle": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentRenameInput": {
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                56
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                225
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentVariablesConnection": {
            "edges": [
                59
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                315
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                61
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                324
            ],
            "__typename": [
                239
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                71
            ],
            "measurement": [
                99
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Event": {
            "action": [
                239
            ],
            "createdAt": [
                34
            ],
            "environment": [
                47
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "object": [
                239
            ],
            "payload": [
                89
            ],
            "project": [
                127
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "EventBatchTrackInput": {
            "events": [
                68
            ],
            "__typename": [
                239
            ]
        },
        "EventFilterInput": {
            "action": [
                67
            ],
            "object": [
                67
            ],
            "__typename": [
                239
            ]
        },
        "EventProperties": {},
        "EventStringListFilter": {
            "in": [
                239
            ],
            "notIn": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "EventTrackInput": {
            "eventName": [
                239
            ],
            "properties": [
                66
            ],
            "ts": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                239
            ],
            "type": [
                213
            ],
            "__typename": [
                239
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                239
            ]
        },
        "Float": {},
        "GitHubBranch": {
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                239
            ],
            "fullName": [
                239
            ],
            "id": [
                81
            ],
            "installationId": [
                239
            ],
            "isPrivate": [
                11
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                239
            ],
            "projectId": [
                239
            ],
            "repo": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "HerokuApp": {
            "id": [
                239
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                239
            ],
            "herokuAppId": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                239
            ],
            "message": [
                239
            ],
            "status": [
                80
            ],
            "url": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                89
            ],
            "id": [
                78
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "IntegrationAuth": {
            "id": [
                78
            ],
            "integrations": [
                84,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "provider": [
                239
            ],
            "providerId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                85
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                82
            ],
            "__typename": [
                239
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                89
            ],
            "integrationAuthId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                89
            ],
            "integrationAuthId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "InviteCode": {
            "code": [
                239
            ],
            "createdAt": [
                34
            ],
            "id": [
                78
            ],
            "project": [
                127
            ],
            "projectId": [
                239
            ],
            "role": [
                151
            ],
            "__typename": [
                239
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                239
            ],
            "jobId": [
                239
            ],
            "name": [
                239
            ],
            "why": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                93
            ],
            "message": [
                239
            ],
            "severity": [
                239
            ],
            "tags": [
                94
            ],
            "timestamp": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "LogAttribute": {
            "key": [
                239
            ],
            "value": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "LogTags": {
            "deploymentId": [
                239
            ],
            "deploymentInstanceId": [
                239
            ],
            "environmentId": [
                239
            ],
            "pluginId": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "snapshotId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                239
            ],
            "hostname": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Maintenance": {
            "id": [
                239
            ],
            "message": [
                239
            ],
            "status": [
                97
            ],
            "url": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                81
            ],
            "value": [
                71
            ],
            "__typename": [
                239
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                239
            ],
            "environmentId": [
                239
            ],
            "pluginId": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "volumeId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "MetricsResult": {
            "measurement": [
                99
            ],
            "tags": [
                101
            ],
            "values": [
                98
            ],
            "__typename": [
                239
            ]
        },
        "MissingCommandAlertInput": {
            "page": [
                239
            ],
            "text": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                239,
                {
                    "input": [
                        6,
                        "ApiTokenCreateInput!"
                    ]
                }
            ],
            "apiTokenDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        8,
                        "BaseEnvironmentOverrideInput!"
                    ]
                }
            ],
            "customDomainCreate": [
                22,
                {
                    "input": [
                        23,
                        "CustomDomainCreateInput!"
                    ]
                }
            ],
            "customDomainDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "customerMigrateToHobbyPlan": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deploymentCancel": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                35,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "usePreviousImageTag": [
                        11
                    ]
                }
            ],
            "deploymentRemove": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                41,
                {
                    "input": [
                        42,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                41,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        43,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                11,
                {
                    "nonce": [
                        239,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                11,
                {
                    "newEmail": [
                        239,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                47,
                {
                    "input": [
                        48,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "environmentRename": [
                47,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        54,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                11,
                {
                    "input": [
                        57,
                        "EnvironmentTriggersDeployInput!"
                    ]
                }
            ],
            "eventBatchTrack": [
                11,
                {
                    "input": [
                        64,
                        "EventBatchTrackInput!"
                    ]
                }
            ],
            "eventTrack": [
                11,
                {
                    "input": [
                        68,
                        "EventTrackInput!"
                    ]
                }
            ],
            "fairUseAgree": [
                11,
                {
                    "agree": [
                        11,
                        "Boolean!"
                    ]
                }
            ],
            "featureFlagAdd": [
                11,
                {
                    "input": [
                        70,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                11,
                {
                    "input": [
                        70,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                11,
                {
                    "input": [
                        74,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                11,
                {
                    "input": [
                        75,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                81,
                {
                    "input": [
                        77,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "integrationCreate": [
                82,
                {
                    "input": [
                        86,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                82,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        87,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                127,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                11,
                {
                    "input": [
                        90,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        292,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                11,
                {
                    "input": [
                        95,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                11,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                239,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                239
            ],
            "loginSessionVerify": [
                11,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "logout": [
                11
            ],
            "missingCommandAlert": [
                11,
                {
                    "input": [
                        103,
                        "MissingCommandAlertInput!"
                    ]
                }
            ],
            "pluginCreate": [
                111,
                {
                    "input": [
                        114,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                11,
                {
                    "environmentId": [
                        239
                    ],
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        211,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                239,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        210,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                111,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        115,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        115,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                111,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        118,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferencesUpdate": [
                121,
                {
                    "input": [
                        122,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                123,
                {
                    "input": [
                        124,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                125,
                {
                    "input": [
                        126,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                11,
                {
                    "dnsName": [
                        239,
                        "String!"
                    ],
                    "id": [
                        239,
                        "String!"
                    ],
                    "privateNetworkId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                11,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                127,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                127,
                {
                    "input": [
                        128,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                145,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                138,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        141,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                138,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        140,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                142,
                {
                    "input": [
                        143,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                142,
                {
                    "input": [
                        144,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectTokenCreate": [
                239,
                {
                    "input": [
                        155,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                11,
                {
                    "input": [
                        156,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                11,
                {
                    "input": [
                        157,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        158,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectTransferToUser": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectUpdate": [
                127,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        159,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                201
            ],
            "recoveryCodeValidate": [
                11,
                {
                    "input": [
                        200,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                202,
                {
                    "input": [
                        203,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "sendCommunityThreadNotificationEmail": [
                11,
                {
                    "input": [
                        215,
                        "SendCommunityThreadNotificationEmailInput!"
                    ]
                }
            ],
            "serviceConnect": [
                217,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        218,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                217,
                {
                    "input": [
                        219,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                11,
                {
                    "environmentId": [
                        239
                    ],
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                217,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                222,
                {
                    "input": [
                        223,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                11,
                {
                    "input": [
                        224,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                11,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                11,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                11,
                {
                    "environmentId": [
                        239
                    ],
                    "input": [
                        226,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                217,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                217,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        233,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                315,
                {
                    "input": [
                        237,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                246,
                {
                    "input": [
                        247,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "teamBulkProjectTransfer": [
                11,
                {
                    "input": [
                        249,
                        "TeamBulkProjectTransferInput!"
                    ]
                }
            ],
            "teamCreate": [
                248,
                {
                    "input": [
                        252,
                        "TeamCreateInput!"
                    ]
                }
            ],
            "teamCreateAndSubscribe": [
                251,
                {
                    "input": [
                        250,
                        "TeamCreateAndSubscribeInput!"
                    ]
                }
            ],
            "teamDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "teamInviteCodeCreate": [
                239,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        254,
                        "TeamInviteCodeCreateInput!"
                    ]
                }
            ],
            "teamInviteCodeUse": [
                248,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "teamLeave": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "teamPermissionChange": [
                11,
                {
                    "input": [
                        257,
                        "TeamPermissionChangeInput!"
                    ]
                }
            ],
            "teamUpdate": [
                248,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        261,
                        "TeamUpdateInput!"
                    ]
                }
            ],
            "teamUserInvite": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        262,
                        "TeamUserInviteInput!"
                    ]
                }
            ],
            "teamUserRemove": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        263,
                        "TeamUserRemoveInput!"
                    ]
                }
            ],
            "telemetrySend": [
                11,
                {
                    "input": [
                        264,
                        "TelemetrySendInput!"
                    ]
                }
            ],
            "templateClone": [
                265,
                {
                    "input": [
                        266,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateCreate": [
                265,
                {
                    "input": [
                        268,
                        "TemplateCreateInput!"
                    ]
                }
            ],
            "templateDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        270,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                272,
                {
                    "input": [
                        271,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateGenerate": [
                265,
                {
                    "input": [
                        274,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templateMaybeUnsetCommunityThreadSlug": [
                11,
                {
                    "communityThreadSlug": [
                        239,
                        "String!"
                    ]
                }
            ],
            "templatePublish": [
                265,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        277,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                11,
                {
                    "input": [
                        281,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "templateUpdate": [
                265,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        286,
                        "TemplateUpdateInput!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                201,
                {
                    "input": [
                        289,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                11
            ],
            "twoFactorInfoSecret": [
                290
            ],
            "twoFactorInfoValidate": [
                11,
                {
                    "input": [
                        291,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannelForTeam": [
                11,
                {
                    "teamId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                11,
                {
                    "input": [
                        297,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                11,
                {
                    "input": [
                        298,
                        "UsageLimitSetInput!"
                    ]
                }
            ],
            "userBetaLeave": [
                11
            ],
            "userDelete": [
                11
            ],
            "userDiscordDisconnect": [
                11
            ],
            "userFlagsRemove": [
                11,
                {
                    "input": [
                        302,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                11,
                {
                    "input": [
                        303,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                11,
                {
                    "input": [
                        307,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userTermsUpdate": [
                299
            ],
            "userUpdate": [
                299,
                {
                    "input": [
                        314,
                        "UserUpdateInput!"
                    ]
                }
            ],
            "variableCollectionUpsert": [
                11,
                {
                    "input": [
                        316,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                11,
                {
                    "input": [
                        317,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                11,
                {
                    "input": [
                        318,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                322,
                {
                    "input": [
                        323,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                11,
                {
                    "volumeId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                11,
                {
                    "environmentId": [
                        239
                    ],
                    "input": [
                        325,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                322,
                {
                    "input": [
                        327,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                162,
                {
                    "input": [
                        330,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookDelete": [
                11,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "webhookUpdate": [
                162,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "input": [
                        331,
                        "WebhookUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                239
            ]
        },
        "Node": {
            "id": [
                78
            ],
            "on_AdoptionInfo": [
                2
            ],
            "on_ApiToken": [
                5
            ],
            "on_BanReasonHistory": [
                7
            ],
            "on_Container": [
                18
            ],
            "on_Credit": [
                19
            ],
            "on_Customer": [
                25
            ],
            "on_Deployment": [
                35
            ],
            "on_DeploymentSnapshot": [
                38
            ],
            "on_DeploymentTrigger": [
                41
            ],
            "on_Environment": [
                47
            ],
            "on_Event": [
                63
            ],
            "on_Integration": [
                82
            ],
            "on_IntegrationAuth": [
                83
            ],
            "on_InviteCode": [
                88
            ],
            "on_PlanLimitOverride": [
                109
            ],
            "on_Plugin": [
                111
            ],
            "on_Preferences": [
                121
            ],
            "on_Project": [
                127
            ],
            "on_ProjectPermission": [
                145
            ],
            "on_ProjectToken": [
                154
            ],
            "on_ProjectWebhook": [
                162
            ],
            "on_ProviderAuth": [
                165
            ],
            "on_ReferralInfo": [
                202
            ],
            "on_Service": [
                217
            ],
            "on_ServiceInstance": [
                225
            ],
            "on_Session": [
                235
            ],
            "on_Team": [
                248
            ],
            "on_TeamPermission": [
                256
            ],
            "on_Template": [
                265
            ],
            "on_TemplateService": [
                278
            ],
            "on_UsageAnomaly": [
                293
            ],
            "on_UsageLimit": [
                296
            ],
            "on_User": [
                299
            ],
            "on_Variable": [
                315
            ],
            "on_Volume": [
                322
            ],
            "on_VolumeInstance": [
                324
            ],
            "__typename": [
                239
            ]
        },
        "PageInfo": {
            "endCursor": [
                239
            ],
            "hasNextPage": [
                11
            ],
            "hasPreviousPage": [
                11
            ],
            "startCursor": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PaymentMethod": {
            "card": [
                108
            ],
            "id": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                239
            ],
            "country": [
                239
            ],
            "last4": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PlanLimitOverride": {
            "config": [
                243
            ],
            "id": [
                78
            ],
            "__typename": [
                239
            ]
        },
        "PlatformStatus": {
            "incident": [
                79
            ],
            "isStable": [
                11
            ],
            "maintenance": [
                96
            ],
            "__typename": [
                239
            ]
        },
        "Plugin": {
            "containers": [
                112,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deprecatedAt": [
                34
            ],
            "friendlyName": [
                239
            ],
            "id": [
                78
            ],
            "logsEnabled": [
                11
            ],
            "migrationDatabaseServiceId": [
                239
            ],
            "name": [
                117
            ],
            "project": [
                127
            ],
            "status": [
                116
            ],
            "variables": [
                119,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "__typename": [
                239
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                113
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                18
            ],
            "__typename": [
                239
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                239
            ],
            "friendlyName": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                120
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                315
            ],
            "__typename": [
                239
            ]
        },
        "Preferences": {
            "buildFailedEmail": [
                11
            ],
            "changelogEmail": [
                11
            ],
            "communityEmail": [
                11
            ],
            "deployCrashedEmail": [
                11
            ],
            "id": [
                78
            ],
            "marketingEmail": [
                11
            ],
            "subprocessorUpdatesEmail": [
                11
            ],
            "usageEmail": [
                11
            ],
            "__typename": [
                239
            ]
        },
        "PreferencesUpdateData": {
            "buildFailedEmail": [
                11
            ],
            "changelogEmail": [
                11
            ],
            "communityEmail": [
                11
            ],
            "deployCrashedEmail": [
                11
            ],
            "marketingEmail": [
                11
            ],
            "subprocessorUpdatesEmail": [
                11
            ],
            "token": [
                239
            ],
            "usageEmail": [
                11
            ],
            "__typename": [
                239
            ]
        },
        "PrivateNetwork": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "dnsName": [
                239
            ],
            "environmentId": [
                239
            ],
            "name": [
                239
            ],
            "networkId": [
                9
            ],
            "projectId": [
                239
            ],
            "publicId": [
                239
            ],
            "tags": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "tags": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PrivateNetworkEndpoint": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "dnsName": [
                239
            ],
            "privateIps": [
                239
            ],
            "publicId": [
                239
            ],
            "serviceInstanceId": [
                239
            ],
            "tags": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                239
            ],
            "privateNetworkId": [
                239
            ],
            "serviceId": [
                239
            ],
            "serviceName": [
                239
            ],
            "tags": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Project": {
            "baseEnvironment": [
                47
            ],
            "baseEnvironmentId": [
                239
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deploymentTriggers": [
                130,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "deployments": [
                132,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "description": [
                239
            ],
            "environments": [
                134,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "expiredAt": [
                34
            ],
            "groups": [
                136,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "id": [
                78
            ],
            "isPublic": [
                11
            ],
            "isTempProject": [
                11
            ],
            "members": [
                142
            ],
            "name": [
                239
            ],
            "plugins": [
                146,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "prDeploys": [
                11
            ],
            "prForks": [
                11
            ],
            "projectPermissions": [
                148,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "services": [
                152,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                243
            ],
            "subscriptionType": [
                244
            ],
            "team": [
                248
            ],
            "teamId": [
                239
            ],
            "updatedAt": [
                34
            ],
            "volumes": [
                160,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "webhooks": [
                163,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "__typename": [
                239
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                239
            ],
            "description": [
                239
            ],
            "isPublic": [
                11
            ],
            "name": [
                239
            ],
            "plugins": [
                239
            ],
            "prDeploys": [
                11
            ],
            "repo": [
                129
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                239
            ],
            "fullRepoName": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                131
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                41
            ],
            "__typename": [
                239
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                133
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                35
            ],
            "__typename": [
                239
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                135
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                47
            ],
            "__typename": [
                239
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                137
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectInvitation": {
            "email": [
                239
            ],
            "expiresAt": [
                34
            ],
            "id": [
                78
            ],
            "inviter": [
                139
            ],
            "isExpired": [
                11
            ],
            "project": [
                166
            ],
            "__typename": [
                239
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                239
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                239
            ],
            "link": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectInvitee": {
            "email": [
                239
            ],
            "role": [
                151
            ],
            "__typename": [
                239
            ]
        },
        "ProjectMember": {
            "avatar": [
                239
            ],
            "email": [
                239
            ],
            "id": [
                239
            ],
            "name": [
                239
            ],
            "role": [
                151
            ],
            "__typename": [
                239
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                239
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                239
            ],
            "role": [
                151
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectPermission": {
            "id": [
                78
            ],
            "projectId": [
                239
            ],
            "role": [
                151
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                147
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                111
            ],
            "__typename": [
                239
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                149
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                145
            ],
            "__typename": [
                239
            ]
        },
        "ProjectResourceAccess": {
            "customDomain": [
                0
            ],
            "databaseDeployment": [
                0
            ],
            "deployment": [
                0
            ],
            "environment": [
                0
            ],
            "plugin": [
                0
            ],
            "__typename": [
                239
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                153
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                217
            ],
            "__typename": [
                239
            ]
        },
        "ProjectToken": {
            "createdAt": [
                34
            ],
            "displayToken": [
                239
            ],
            "environment": [
                47
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "name": [
                239
            ],
            "project": [
                127
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectTransferConfirmInput": {
            "ownershipTransferId": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                239
            ],
            "description": [
                239
            ],
            "isPublic": [
                11
            ],
            "name": [
                239
            ],
            "prDeploys": [
                11
            ],
            "prForks": [
                11
            ],
            "__typename": [
                239
            ]
        },
        "ProjectVolumesConnection": {
            "edges": [
                161
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                322
            ],
            "__typename": [
                239
            ]
        },
        "ProjectWebhook": {
            "id": [
                78
            ],
            "lastStatus": [
                81
            ],
            "projectId": [
                239
            ],
            "url": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ProjectWebhooksConnection": {
            "edges": [
                164
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ProjectWebhooksConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                162
            ],
            "__typename": [
                239
            ]
        },
        "ProviderAuth": {
            "email": [
                239
            ],
            "id": [
                78
            ],
            "metadata": [
                89
            ],
            "provider": [
                239
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PublicProjectInformation": {
            "id": [
                78
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                88
            ],
            "on_ProjectInvitation": [
                138
            ],
            "on_Node": [
                105
            ],
            "__typename": [
                239
            ]
        },
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                81
            ],
            "totalLogsLastMonth": [
                9
            ],
            "totalProjects": [
                81
            ],
            "totalRequestsLastMonth": [
                9
            ],
            "totalServices": [
                81
            ],
            "totalUsers": [
                81
            ],
            "__typename": [
                239
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                324,
                {
                    "volumeId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                170,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "buildLogs": [
                92,
                {
                    "deploymentId": [
                        239,
                        "String!"
                    ],
                    "endDate": [
                        34
                    ],
                    "filter": [
                        239
                    ],
                    "limit": [
                        81
                    ],
                    "startDate": [
                        34
                    ]
                }
            ],
            "changelogBlockImage": [
                239,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "creditTransferMetrics": [
                20
            ],
            "customDomain": [
                22,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                45,
                {
                    "domain": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                35,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deploymentLogs": [
                92,
                {
                    "deploymentId": [
                        239,
                        "String!"
                    ],
                    "endDate": [
                        34
                    ],
                    "filter": [
                        239
                    ],
                    "limit": [
                        81
                    ],
                    "startDate": [
                        34
                    ]
                }
            ],
            "deploymentTriggers": [
                172,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                174,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "input": [
                        36,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "domainStatus": [
                46,
                {
                    "id": [
                        239,
                        "String!"
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "domains": [
                4,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "environment": [
                47,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "environmentPatches": [
                176,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "environments": [
                178,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "isEphemeral": [
                        11
                    ],
                    "last": [
                        81
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                62,
                {
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        99,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        239
                    ],
                    "teamId": [
                        239
                    ],
                    "userId": [
                        239
                    ]
                }
            ],
            "events": [
                180,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "environmentId": [
                        239
                    ],
                    "filter": [
                        65
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                11,
                {
                    "fullRepoName": [
                        239,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                72,
                {
                    "owner": [
                        239,
                        "String!"
                    ],
                    "repo": [
                        239,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                73
            ],
            "githubWritableScopes": [
                239
            ],
            "herokuApps": [
                76
            ],
            "integrationAuth": [
                83,
                {
                    "provider": [
                        239,
                        "String!"
                    ],
                    "providerId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                182,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "integrations": [
                184,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                88,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "me": [
                299
            ],
            "metrics": [
                102,
                {
                    "averagingWindowSeconds": [
                        81
                    ],
                    "endDate": [
                        34
                    ],
                    "environmentId": [
                        239
                    ],
                    "groupBy": [
                        100,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        99,
                        "[MetricMeasurement!]!"
                    ],
                    "pluginId": [
                        239
                    ],
                    "projectId": [
                        239
                    ],
                    "sampleRateSeconds": [
                        81
                    ],
                    "serviceId": [
                        239
                    ],
                    "startDate": [
                        34,
                        "DateTime!"
                    ],
                    "teamId": [
                        239
                    ],
                    "userId": [
                        239
                    ],
                    "volumeId": [
                        239
                    ]
                }
            ],
            "node": [
                105,
                {
                    "id": [
                        78,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                105,
                {
                    "ids": [
                        78,
                        "[ID!]!"
                    ]
                }
            ],
            "plainCustomerIdForDiscordId": [
                239,
                {
                    "discordId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "plainJWTForDiscordId": [
                239,
                {
                    "discordId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "platformStatus": [
                110
            ],
            "plugin": [
                111,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                92,
                {
                    "endDate": [
                        34
                    ],
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "filter": [
                        239
                    ],
                    "limit": [
                        81
                    ],
                    "pluginId": [
                        239,
                        "String!"
                    ],
                    "startDate": [
                        34
                    ]
                }
            ],
            "preferences": [
                121,
                {
                    "token": [
                        239
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                125,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "privateNetworkId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                11,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "prefix": [
                        239,
                        "String!"
                    ],
                    "privateNetworkId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                123,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "project": [
                127,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                167,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                138,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                88,
                {
                    "projectId": [
                        239,
                        "String!"
                    ],
                    "role": [
                        151,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                142,
                {
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                150,
                {
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                154
            ],
            "projectTokens": [
                186,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "projects": [
                188,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "last": [
                        81
                    ],
                    "teamId": [
                        239
                    ],
                    "userId": [
                        239
                    ]
                }
            ],
            "publicStats": [
                168
            ],
            "referralInfo": [
                202
            ],
            "regions": [
                207
            ],
            "resourceAccess": [
                212,
                {
                    "explicitResourceOwner": [
                        69
                    ]
                }
            ],
            "service": [
                217,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                45,
                {
                    "domain": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                225,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                11,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                190,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "tcpProxies": [
                246,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "team": [
                248,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "teamByCode": [
                248,
                {
                    "code": [
                        239,
                        "String!"
                    ]
                }
            ],
            "teamDirectSupportDiscordInfoForDiscordId": [
                253,
                {
                    "discordId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                192,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ],
                    "teamId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "template": [
                265,
                {
                    "code": [
                        239
                    ],
                    "owner": [
                        239
                    ],
                    "repo": [
                        239
                    ]
                }
            ],
            "templateFromHerokuTemplate": [
                89,
                {
                    "repoUrl": [
                        239,
                        "String!"
                    ]
                }
            ],
            "templateKickbacksLeaderboard": [
                275
            ],
            "templateSourceForProject": [
                265,
                {
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "templatekickbacksTotal": [
                71
            ],
            "templates": [
                194,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ],
                    "recommended": [
                        11
                    ]
                }
            ],
            "twoFactorInfo": [
                288
            ],
            "usage": [
                3,
                {
                    "endDate": [
                        34
                    ],
                    "groupBy": [
                        100,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        99,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        239
                    ],
                    "startDate": [
                        34
                    ],
                    "teamId": [
                        239
                    ],
                    "userId": [
                        239
                    ]
                }
            ],
            "userIdForDiscordId": [
                239,
                {
                    "discordId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "userKickbackEarnings": [
                304,
                {
                    "userId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                306,
                {
                    "username": [
                        239,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                196,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "variables": [
                234,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "pluginId": [
                        239
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239
                    ],
                    "unrendered": [
                        11
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                234,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ],
                    "serviceId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                320
            ],
            "volumeInstance": [
                324,
                {
                    "id": [
                        239,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                198,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ],
                    "projectId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                332,
                {
                    "workflowId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                239
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                171
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                5
            ],
            "__typename": [
                239
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                173
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                41
            ],
            "__typename": [
                239
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                175
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                35
            ],
            "__typename": [
                239
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                177
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                179
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                47
            ],
            "__typename": [
                239
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                181
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                63
            ],
            "__typename": [
                239
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                183
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                83
            ],
            "__typename": [
                239
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                185
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                82
            ],
            "__typename": [
                239
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                187
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                154
            ],
            "__typename": [
                239
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                189
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                127
            ],
            "__typename": [
                239
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                191
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                235
            ],
            "__typename": [
                239
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                193
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                265
            ],
            "__typename": [
                239
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                195
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                265
            ],
            "__typename": [
                239
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                197
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                265
            ],
            "__typename": [
                239
            ]
        },
        "QueryWebhooksConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "QueryWebhooksConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                162
            ],
            "__typename": [
                239
            ]
        },
        "RecoveryCodeValidateInput": {
            "code": [
                239
            ],
            "twoFactorLinkingKey": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ReferralInfo": {
            "code": [
                239
            ],
            "id": [
                78
            ],
            "referralStats": [
                204
            ],
            "status": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ReferralStats": {
            "credited": [
                81
            ],
            "pending": [
                81
            ],
            "__typename": [
                239
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                239
            ],
            "id": [
                239
            ],
            "status": [
                205
            ],
            "__typename": [
                239
            ]
        },
        "Region": {
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                239
            ],
            "username": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ResetPluginCredentialsInput": {
            "environmentId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ResourceAccess": {
            "project": [
                0
            ],
            "__typename": [
                239
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SendCommunityThreadNotificationEmailInput": {
            "threadTitle": [
                239
            ],
            "threadUrl": [
                239
            ],
            "userIds": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "SerializedTemplateConfig": {},
        "Service": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deployments": [
                220,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "icon": [
                239
            ],
            "id": [
                78
            ],
            "name": [
                239
            ],
            "project": [
                127
            ],
            "projectId": [
                239
            ],
            "repoTriggers": [
                227,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "serviceInstances": [
                229,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "templateThreadSlug": [
                239
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                239
            ],
            "image": [
                239
            ],
            "repo": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                239
            ],
            "environmentId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "source": [
                232
            ],
            "variables": [
                234
            ],
            "__typename": [
                239
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                221
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                35
            ],
            "__typename": [
                239
            ]
        },
        "ServiceDomain": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                239
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "suffix": [
                239
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                239
            ],
            "environmentId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                239
            ],
            "builder": [
                12
            ],
            "createdAt": [
                34
            ],
            "cronSchedule": [
                239
            ],
            "deletedAt": [
                34
            ],
            "domains": [
                4
            ],
            "environmentId": [
                239
            ],
            "healthcheckPath": [
                239
            ],
            "healthcheckTimeout": [
                81
            ],
            "id": [
                78
            ],
            "isUpdatable": [
                11
            ],
            "latestDeployment": [
                35
            ],
            "nextCronRunAt": [
                34
            ],
            "nixpacksPlan": [
                89
            ],
            "numReplicas": [
                81
            ],
            "railwayConfigFile": [
                239
            ],
            "region": [
                239
            ],
            "restartPolicyMaxRetries": [
                81
            ],
            "restartPolicyType": [
                214
            ],
            "rootDirectory": [
                239
            ],
            "serviceId": [
                239
            ],
            "sleepApplication": [
                11
            ],
            "source": [
                231
            ],
            "startCommand": [
                239
            ],
            "updatedAt": [
                34
            ],
            "upstreamUrl": [
                239
            ],
            "watchPatterns": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                239
            ],
            "builder": [
                12
            ],
            "cronSchedule": [
                239
            ],
            "healthcheckPath": [
                239
            ],
            "healthcheckTimeout": [
                81
            ],
            "nixpacksPlan": [
                89
            ],
            "numReplicas": [
                81
            ],
            "railwayConfigFile": [
                239
            ],
            "region": [
                239
            ],
            "registryCredentials": [
                209
            ],
            "restartPolicyMaxRetries": [
                81
            ],
            "restartPolicyType": [
                214
            ],
            "rootDirectory": [
                239
            ],
            "source": [
                232
            ],
            "startCommand": [
                239
            ],
            "watchPatterns": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                228
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                41
            ],
            "__typename": [
                239
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                230
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                225
            ],
            "__typename": [
                239
            ]
        },
        "ServiceSource": {
            "image": [
                239
            ],
            "repo": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceSourceInput": {
            "image": [
                239
            ],
            "repo": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                239
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "ServiceVariables": {},
        "Session": {
            "createdAt": [
                34
            ],
            "expiredAt": [
                34
            ],
            "id": [
                78
            ],
            "isCurrent": [
                11
            ],
            "name": [
                239
            ],
            "type": [
                236
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                239
            ],
            "enabledServiceIds": [
                239
            ],
            "environmentId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "SimilarTemplate": {
            "code": [
                239
            ],
            "createdAt": [
                34
            ],
            "creator": [
                269
            ],
            "deploys": [
                81
            ],
            "description": [
                239
            ],
            "health": [
                71
            ],
            "image": [
                239
            ],
            "name": [
                239
            ],
            "teamId": [
                239
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "String": {},
        "Subscription": {
            "buildLogs": [
                92,
                {
                    "deploymentId": [
                        239,
                        "String!"
                    ],
                    "filter": [
                        239
                    ],
                    "limit": [
                        81
                    ]
                }
            ],
            "deploymentLogs": [
                92,
                {
                    "deploymentId": [
                        239,
                        "String!"
                    ],
                    "filter": [
                        239
                    ],
                    "limit": [
                        81
                    ]
                }
            ],
            "pluginLogs": [
                92,
                {
                    "environmentId": [
                        239,
                        "String!"
                    ],
                    "filter": [
                        239
                    ],
                    "limit": [
                        81
                    ],
                    "pluginId": [
                        239,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                239
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                239
            ],
            "priceId": [
                239
            ],
            "productId": [
                239
            ],
            "quantity": [
                9
            ],
            "__typename": [
                239
            ]
        },
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "TCPProxy": {
            "applicationPort": [
                81
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                239
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "proxyPort": [
                81
            ],
            "serviceId": [
                239
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                81
            ],
            "environmentId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Team": {
            "adoptionHistory": [
                2
            ],
            "adoptionLevel": [
                71
            ],
            "avatar": [
                239
            ],
            "banReason": [
                239
            ],
            "createdAt": [
                34
            ],
            "customer": [
                25
            ],
            "discordRole": [
                239
            ],
            "id": [
                78
            ],
            "isEligibleForDirectSupport": [
                11
            ],
            "members": [
                255
            ],
            "name": [
                239
            ],
            "projects": [
                258,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "slackChannelId": [
                239
            ],
            "teamPermissions": [
                256
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "TeamBulkProjectTransferInput": {
            "projectIds": [
                239
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamCreateAndSubscribeInput": {
            "avatar": [
                239
            ],
            "name": [
                239
            ],
            "paymentMethodId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamCreateAndSubscribeResponse": {
            "customerId": [
                239
            ],
            "paymentIntent": [
                89
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamCreateInput": {
            "avatar": [
                239
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamDirectSupportDiscordInfo": {
            "memberDiscordIds": [
                239
            ],
            "teamId": [
                239
            ],
            "teamName": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamInviteCodeCreateInput": {
            "role": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamMember": {
            "avatar": [
                239
            ],
            "email": [
                239
            ],
            "id": [
                239
            ],
            "name": [
                239
            ],
            "role": [
                260
            ],
            "__typename": [
                239
            ]
        },
        "TeamPermission": {
            "createdAt": [
                34
            ],
            "id": [
                78
            ],
            "role": [
                260
            ],
            "teamId": [
                239
            ],
            "updatedAt": [
                34
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamPermissionChangeInput": {
            "role": [
                260
            ],
            "teamId": [
                239
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                259
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                127
            ],
            "__typename": [
                239
            ]
        },
        "TeamRole": {},
        "TeamUpdateInput": {
            "avatar": [
                239
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamUserInviteInput": {
            "code": [
                239
            ],
            "email": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TeamUserRemoveInput": {
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TelemetrySendInput": {
            "command": [
                239
            ],
            "environmentId": [
                239
            ],
            "error": [
                239
            ],
            "projectId": [
                239
            ],
            "stacktrace": [
                239
            ],
            "version": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Template": {
            "activeProjects": [
                81
            ],
            "code": [
                239
            ],
            "communityThreadSlug": [
                239
            ],
            "config": [
                267
            ],
            "createdAt": [
                34
            ],
            "creator": [
                269
            ],
            "demoProjectId": [
                239
            ],
            "health": [
                71
            ],
            "id": [
                78
            ],
            "isApproved": [
                11
            ],
            "isV2Template": [
                11
            ],
            "metadata": [
                276
            ],
            "projects": [
                81
            ],
            "serializedConfig": [
                216
            ],
            "services": [
                283,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "similarTemplates": [
                238
            ],
            "status": [
                285
            ],
            "teamId": [
                239
            ],
            "totalPayout": [
                71
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateCloneInput": {
            "code": [
                239
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateConfig": {},
        "TemplateCreateInput": {
            "config": [
                267
            ],
            "demoProjectId": [
                239
            ],
            "metadata": [
                276
            ],
            "services": [
                280
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateCreator": {
            "avatar": [
                239
            ],
            "hasPublicProfile": [
                11
            ],
            "name": [
                239
            ],
            "username": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateDeleteInput": {
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                239
            ],
            "projectId": [
                239
            ],
            "services": [
                273
            ],
            "teamId": [
                239
            ],
            "templateCode": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                239
            ],
            "workflowId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateDeployService": {
            "commit": [
                239
            ],
            "hasDomain": [
                11
            ],
            "healthcheckPath": [
                239
            ],
            "id": [
                239
            ],
            "isPrivate": [
                11
            ],
            "name": [
                239
            ],
            "owner": [
                239
            ],
            "rootDirectory": [
                239
            ],
            "serviceIcon": [
                239
            ],
            "serviceName": [
                239
            ],
            "startCommand": [
                239
            ],
            "tcpProxyApplicationPort": [
                81
            ],
            "template": [
                239
            ],
            "variables": [
                234
            ],
            "volumes": [
                287
            ],
            "__typename": [
                239
            ]
        },
        "TemplateGenerateInput": {
            "projectId": [
                239
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateKickbacksLeaderboard": {
            "total_amount": [
                71
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateMetadata": {},
        "TemplatePublishInput": {
            "category": [
                239
            ],
            "description": [
                239
            ],
            "image": [
                239
            ],
            "readme": [
                239
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateService": {
            "config": [
                279
            ],
            "createdAt": [
                34
            ],
            "id": [
                78
            ],
            "templateId": [
                239
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceCreateInput": {
            "config": [
                279
            ],
            "__typename": [
                239
            ]
        },
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                239
            ],
            "repoName": [
                239
            ],
            "repoOwner": [
                239
            ],
            "serviceIds": [
                239
            ],
            "upstreamUrl": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateServiceUpdateInput": {
            "config": [
                279
            ],
            "id": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                284
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                278
            ],
            "__typename": [
                239
            ]
        },
        "TemplateStatus": {},
        "TemplateUpdateInput": {
            "config": [
                267
            ],
            "demoProjectId": [
                239
            ],
            "forceUpdate": [
                11
            ],
            "metadata": [
                276
            ],
            "services": [
                282
            ],
            "teamId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TemplateVolume": {},
        "TwoFactorInfo": {
            "hasRecoveryCodes": [
                11
            ],
            "isVerified": [
                11
            ],
            "__typename": [
                239
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                239
            ],
            "uri": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                239
            ],
            "twoFactorLinkingKey": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Upload": {},
        "UsageAnomaly": {
            "actedOn": [
                34
            ],
            "action": [
                294
            ],
            "actorId": [
                239
            ],
            "flaggedAt": [
                34
            ],
            "flaggedFor": [
                295
            ],
            "id": [
                78
            ],
            "__typename": [
                239
            ]
        },
        "UsageAnomalyAction": {},
        "UsageAnomalyFlagReason": {},
        "UsageLimit": {
            "customerId": [
                239
            ],
            "hardLimit": [
                81
            ],
            "id": [
                78
            ],
            "softLimit": [
                81
            ],
            "__typename": [
                239
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                239
            ],
            "hardLimitDollars": [
                81
            ],
            "softLimitDollars": [
                81
            ],
            "__typename": [
                239
            ]
        },
        "User": {
            "agreedFairUse": [
                11
            ],
            "avatar": [
                239
            ],
            "banReason": [
                239
            ],
            "cost": [
                300
            ],
            "createdAt": [
                34
            ],
            "customer": [
                25
            ],
            "email": [
                239
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                301
            ],
            "has2FA": [
                11
            ],
            "id": [
                78
            ],
            "isAdmin": [
                11
            ],
            "isConductor": [
                11
            ],
            "isDevPlan": [
                11
            ],
            "isEligibleForFreeHobbyPlan": [
                11
            ],
            "isOnHobbyPlan": [
                11
            ],
            "isVerified": [
                11
            ],
            "lastLogin": [
                34
            ],
            "name": [
                239
            ],
            "profile": [
                305
            ],
            "projects": [
                308,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "providerAuths": [
                310,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "referredUsers": [
                206
            ],
            "registrationStatus": [
                208
            ],
            "riskLevel": [
                71
            ],
            "teams": [
                312,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "termsAgreedOn": [
                34
            ],
            "username": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "UserCost": {
            "current": [
                71
            ],
            "estimated": [
                71
            ],
            "__typename": [
                239
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                301
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                301
            ],
            "userId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                71
            ],
            "__typename": [
                239
            ]
        },
        "UserProfile": {
            "bio": [
                239
            ],
            "isPublic": [
                11
            ],
            "website": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                239
            ],
            "createdAt": [
                34
            ],
            "customerId": [
                239
            ],
            "isTrialing": [
                11
            ],
            "name": [
                239
            ],
            "profile": [
                305
            ],
            "publishedTemplates": [
                238
            ],
            "state": [
                239
            ],
            "totalDeploys": [
                81
            ],
            "username": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                239
            ],
            "isPublic": [
                11
            ],
            "website": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                309
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                127
            ],
            "__typename": [
                239
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                311
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                165
            ],
            "__typename": [
                239
            ]
        },
        "UserTeamsConnection": {
            "edges": [
                313
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "UserTeamsConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                248
            ],
            "__typename": [
                239
            ]
        },
        "UserUpdateInput": {
            "avatar": [
                239
            ],
            "name": [
                239
            ],
            "username": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Variable": {
            "createdAt": [
                34
            ],
            "environment": [
                47
            ],
            "environmentId": [
                239
            ],
            "id": [
                78
            ],
            "name": [
                239
            ],
            "plugin": [
                111
            ],
            "pluginId": [
                239
            ],
            "references": [
                239
            ],
            "service": [
                217
            ],
            "serviceId": [
                239
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                239
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                239
            ],
            "projectId": [
                239
            ],
            "replace": [
                11
            ],
            "serviceId": [
                239
            ],
            "variables": [
                234
            ],
            "__typename": [
                239
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                239
            ],
            "name": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "value": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "VercelAccount": {
            "id": [
                239
            ],
            "integrationAuthId": [
                239
            ],
            "isUser": [
                11
            ],
            "name": [
                239
            ],
            "projects": [
                321
            ],
            "slug": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "VercelInfo": {
            "accounts": [
                319
            ],
            "__typename": [
                239
            ]
        },
        "VercelProject": {
            "accountId": [
                239
            ],
            "id": [
                239
            ],
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "Volume": {
            "createdAt": [
                34
            ],
            "id": [
                78
            ],
            "name": [
                239
            ],
            "project": [
                127
            ],
            "projectId": [
                239
            ],
            "volumeInstances": [
                328,
                {
                    "after": [
                        239
                    ],
                    "before": [
                        239
                    ],
                    "first": [
                        81
                    ],
                    "last": [
                        81
                    ]
                }
            ],
            "__typename": [
                239
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                239
            ],
            "mountPath": [
                239
            ],
            "projectId": [
                239
            ],
            "serviceId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                34
            ],
            "currentSizeMB": [
                71
            ],
            "environment": [
                47
            ],
            "environmentId": [
                239
            ],
            "externalId": [
                239
            ],
            "id": [
                78
            ],
            "mountPath": [
                239
            ],
            "region": [
                239
            ],
            "service": [
                217
            ],
            "serviceId": [
                239
            ],
            "sizeMB": [
                81
            ],
            "state": [
                326
            ],
            "volume": [
                322
            ],
            "volumeId": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                239
            ],
            "serviceId": [
                239
            ],
            "state": [
                326
            ],
            "__typename": [
                239
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                329
            ],
            "pageInfo": [
                106
            ],
            "__typename": [
                239
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                239
            ],
            "node": [
                324
            ],
            "__typename": [
                239
            ]
        },
        "WebhookCreateInput": {
            "projectId": [
                239
            ],
            "url": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "WebhookUpdateInput": {
            "url": [
                239
            ],
            "__typename": [
                239
            ]
        },
        "WorkflowResult": {
            "error": [
                239
            ],
            "status": [
                333
            ],
            "__typename": [
                239
            ]
        },
        "WorkflowStatus": {}
    }
}