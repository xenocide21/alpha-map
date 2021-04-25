#!/s/std/bin/perl -wT
# $Id: ptsofint2.js,v 1.19 2006-11-15 12:33:00 mwaddell Exp $
# $Author: mwaddell $
# $Date: 2006-11-15 12:33:00 $
# 
# Logs web traffic
# 

my $stats = $ENV{'HTTP_REFERER'} . " accessed at " . localtime(time) . 
            " from " . $ENV{'REMOTE_HOST'} . '(' . $ENV{'REMOTE_ADDR'} . ')' . 
	    " using " . $ENV{'HTTP_USER_AGENT'} . "\n";

if (open(LOG, '>>ptsofint2.log'))
{
	print LOG $stats;
	close LOG;
}

print "Content-type: text/javascript\n",
      "Content-Disposition: inline; filename=ptsofint2.js\n\n";

unless ($ENV{'HTTP_REFERER'} =~ /mwaddell\.com\/oberin\/map\.html/ ||
        $ENV{'HTTP_REFERER'} =~ /oberinrebels\.com\/map\.php/)
{
    print q|

// Compile full points of interest data

import zee.oberin.*;

Zee.Oberin.MapData ptsofint2 = new Zee.Oberin.MapData();

|;
    close FILE;
    exit(0);
}

open(FILE, 'ptsofint2.src') or exit(0);
my $buffer;
while(defined *FILE and my $bytesread=read(FILE,$buffer,1024))
{
        print $buffer;
}
close FILE;

