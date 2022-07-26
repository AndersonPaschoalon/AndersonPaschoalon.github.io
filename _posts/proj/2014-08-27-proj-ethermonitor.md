---
layout: post
read_time: false
show_date: true
title:  CPQD3036 EtherMonitor
date:   2014-08-27 0:00:00 -0600
description: Embedded software for eternet interfaces management.
img: posts/ether/etherMonitor.png
tags: [Embedded Linux, Networks, LTE, 4G, CPQD]
author: Anderson Paschoalon
# Links
github: 
publication: 
pdf: /assets/pdf/patent_ether_monitor.pdf
external: https://www.cpqd.com.br/releases/cpqd-apresenta-tecnologia-lte4g-na-faixa-de-700-mhz/
nexus: 
# Properties
is_publication: false
is_project: true
is_blog: false
is_highlight: true # if it will appear in the home or not
has_release: true
mathjax: 
proj-group: research # research, open-source, game, tool 
---

# CPQD3036 EtherMonitor
            
<p>
	<b>EtherMonitor</b> is an application developed in C and implemented for an LTE radio base station, called eNodeB developed in the <a target="_blank" href="https://www.cpqd.com.br/releases/cpqd-apresenta-tecnologia-lte4g-na-faixa-de-700-mhz/">CPQD Foundation's LTE/4G project</a>.
</p>

<p>
	<b>eNodeB</b> is the radio base station responsible for data transmission using LTE technology, used by internet providers to offer 4G services. Physically, the <b>eNodeB</b> has several ethernet network cables responsible for connecting it to the cloud.
</p>

<p align="center">
	<img src="./assets/img/posts/ether/etherMonitor.png"  title="Ethermonitor operation diagram.">
</p>

<p> 
	In the implementation developed by CPQD, at any given time, only one of them will be operational, and the other backup cables. If any of its interfaces fail, EtherMonitor is responsible for disabling this interface, and reconfiguring the next backup interface with all configurations and IPv4 address of the disconnected interface. In this way, EtherMonitor ensures that: 
</p>

<ul>
	<li>
		<b>eNodeB </b> will lose cloud access and control only if all interfaces fail.
	</li>

	<li>
		For the cloud and the operator it is completely transparent that any hardware or software failure has occurred in one of the network interfaces, as the backup interface configuration is automatic.
	</li>

	<li>
		The operator may still be aware that any of the interfaces failed through the <b>eNodeB</b> command line interface, and may take the necessary measures. <b>EtherMonitor</b> must ensure that the correct information about the physical interface used is available.
	</li>

</ul>


