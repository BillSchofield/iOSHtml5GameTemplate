#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController
@synthesize viewWeb;

- (void)viewDidLoad {
    [super viewDidLoad];
    NSString *path;
	NSBundle *thisBundle = [NSBundle mainBundle];
	path = [thisBundle pathForResource:@"index" ofType:@"html"];
    
	NSURL *url = [NSURL fileURLWithPath:path];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    [viewWeb loadRequest:requestObj];
}

- (void)viewDidUnload
{
    [self setViewWeb:nil];
    [super viewDidUnload];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPhone) {
        return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
    } else {
        return YES;
    }
}

@end
