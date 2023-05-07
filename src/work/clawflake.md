---
title: Clawflake
description: Clawflake ID generation system with time-sortable keys.
publication_time: 2023-05-07T20:40:00Z
# last_update_time: 2020-01-01T03:00:00Z
keywords:
  - go
  - distributed
  - system
  - id
  - grpc
  - snowflake
  - clawflake
  - timestamp
  - sortable
  - sort
author: Nicolas Paul
---
# Clawflake

Clawflake is a distributed ID number generation system inspired from Twitter 
[Snowflake](https://github.com/twitter-archive/snowflake/tree/snowflake-2010).

The goal of Clawflake is to be hosted as a distributed system with all workers 
being isolated from each others apart from the machine ID.

Clawflake is also a format, with special patches from Snowflakes.

## Metadata

Website: <https://nc0.fr/work/clawflake> \
Source: <https://github.com/n1c00o/clawflake> \
License: [BSD 3-Clause](https://github.com/n1c00o/clawflake/blob/master/LICENSE)
