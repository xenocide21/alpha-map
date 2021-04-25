#!/s/std/bin/perl -wT
# $Id: data2.js,v 1.3 2006-09-20 16:50:16 mwaddell Exp $
# $Author: mwaddell $
# $Date: 2006-09-20 16:50:16 $
# 
# Logs web traffic
# 

my $stats = $ENV{'HTTP_REFERER'} . " accessed at " . localtime(time) . 
            " from " . $ENV{'REMOTE_HOST'} . '(' . $ENV{'REMOTE_ADDR'} . ')' . 
	    " using " . $ENV{'HTTP_USER_AGENT'} . "\n";

if (open(LOG, '>>data2.log'))
{
	print LOG $stats;
	close LOG;
}

print "Content-type: text/javascript\n",
      "Content-Disposition: inline; filename=data2.js\n\n";

unless ($ENV{'HTTP_REFERER'} =~ /mwaddell\.com\/oberin\/data2\.html/)
{
    print q|

// Build secondary data tables

import zee.oberin.*;

Zee.Oberin.DataTables tbls = new Zee.Oberin.DataTables("#subdata");
tbls.run();

|;
    close FILE;
    exit(0);
}

open(FILE, 'data2.src') or exit(0);
my $buffer;
while(defined *FILE and my $bytesread=read(FILE,$buffer,1024))
{
        print $buffer;
}
close FILE;

